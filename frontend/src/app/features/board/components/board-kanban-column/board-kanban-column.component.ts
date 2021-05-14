import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Issue, IssueStatus } from '@core/interfaces/issue';
import { getIssues } from '@features/issues/state/issue.selectors';
import { IssuePageActions } from '@features/issues/state/actions';
import { AppState } from '@core/interfaces/app.state';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-board-kanban-column]',
  templateUrl: './board-kanban-column.component.html',
  styleUrls: ['./board-kanban-column.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardKanbanColumnComponent implements OnInit {
  @Input() status: IssueStatus;
  issues$: Observable<Issue[]>;
  issuesCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.issues$ = this.store.select(getIssues)
      .pipe(
        map(issues => issues
          .filter(i => i.status === this.status)
          .sort((a, b) => a.listPosition - b.listPosition)
        ),
        tap(issues => this.issuesCount$ = of(issues.length))
      );
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

}
