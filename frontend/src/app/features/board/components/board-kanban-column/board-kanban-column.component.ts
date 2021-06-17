import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Store } from '@ngrx/store';

import { combineLatest, Observable, of, Subject } from 'rxjs';
import { tap, map, switchMap, takeUntil } from 'rxjs/operators';

import { Issue, IssueStatus } from '@core/interfaces/issue';
import { getAllIssues } from '@features/issues/state/selectors/issue.selectors';
import { IssuePageActions } from '@features/issues/state/actions';
import { AppState } from '@core/interfaces/app.state';
import * as fromFilterSelectors from '@features/board/state/filter.selectors';
import * as fromFilter from '@features/board/state/filter.reducer';
import * as fromUserSelectors from '@features/user/state/user.selectors';
import { DateUtil } from '@core/utils/date';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-board-kanban-column]',
  templateUrl: './board-kanban-column.component.html',
  styleUrls: ['./board-kanban-column.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardKanbanColumnComponent implements OnInit, OnDestroy {
  @Input() status: IssueStatus;
  issues$: Observable<Issue[]>;
  issuesCount$: Observable<number>;
  anyFilter: Observable<boolean>;
  totalIssuesFiltered: Observable<number>;

  currentUserId: string;
  private destroy$ = new Subject();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(fromUserSelectors.getCurrentUserId).pipe(takeUntil(this.destroy$))
      .subscribe(currentUserId => this.currentUserId = currentUserId);

    this.anyFilter = this.store.select(fromFilterSelectors.isAnyFilter);

    this.issues$ = combineLatest([
      this.store.select(getAllIssues)
        .pipe(
          map(issues => issues
            .filter(i => i.status === this.status)
            .sort((a, b) => a.listPosition - b.listPosition)
          ),
          tap(issues => this.issuesCount$ = of(issues.length))
        ),
      this.store.select(fromFilterSelectors.getFilterState)
    ]).pipe(
      switchMap(([issues, filterState]) => this.filterIssues(issues, filterState)
      ),
      tap(issues => this.totalIssuesFiltered = of(issues.length))
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  drop(event: CdkDragDrop<Issue[]>) {
    const newIssue: Issue = { ...event.item.data };

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      newIssue.status = event.container.id as IssueStatus;
      this.store.dispatch(IssuePageActions.updateIssue({ issue: newIssue }));
    }
  }

  private filterIssues(issues: Issue[], filter: fromFilter.State): Observable<Issue[]> {
    const { searchTerm, userIds, onlyMyIssues, recentlyUpdated } = filter;
    return of(issues.filter(issue => {
      const isMatchTerm = searchTerm
        ? issue.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        : true;

      const issueUserIds = issue.assignees.map(u => u.id);

      if (!issueUserIds.length) { // no user assigned in the issue
        issueUserIds.push('unassigned');
      }
      const isIncludeUsers = userIds.length
        ? issueUserIds.some(userId => userIds.includes(userId))
        : true;

      const areMyIssues = onlyMyIssues
        ? this.currentUserId && issueUserIds.includes(this.currentUserId)
        : true;

      const areRecentlyUpdated = recentlyUpdated
        ? DateUtil.getDays(new Date(issue.updatedAt)) === 0
        : true;

      return isMatchTerm && isIncludeUsers && areMyIssues && areRecentlyUpdated;
    }));
  }

}
