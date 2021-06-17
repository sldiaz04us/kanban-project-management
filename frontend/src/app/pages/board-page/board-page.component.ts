import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';
import { getAssignedUsers, getCurrentProject, getCurrentProjectId } from '@features/project/state/project.selectors';
import { IssuePageActions } from '@features/issues/state/actions';
import { AppState } from '@core/interfaces/app.state';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent implements OnInit, OnDestroy {
  currentProject$: Observable<Project>;
  assignees$: Observable<User[]>;
  private subs: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.currentProject$ = this.store.select(getCurrentProject)
      .pipe(
        filter(project => Boolean(project))
      );

    this.assignees$ = this.store.select(getAssignedUsers);

    this.subs = this.store.select(getCurrentProjectId).pipe(
      filter(currentProjectId => Boolean(currentProjectId)),
      tap(projectId => {
        this.store.dispatch(IssuePageActions.loadIssues({ projectId }));
      })).subscribe();
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
