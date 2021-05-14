import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';
import { getAssignedUsers, getCurrentProject, getCurrentProjectId } from '@features/project/state/project.selectors';
import { IssuePageActions } from '@features/issues/state/actions';
import { AppState } from '@core/interfaces/app.state';
import { ProjectPageActions } from '@features/project/state/actions';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent implements OnInit, OnDestroy {
  currentProject$: Observable<Project>;
  assignedUsers$: Observable<User[]>;

  private subs: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.currentProject$ = this.store.select(getCurrentProject)
      .pipe(
        filter(project => Boolean(project)),
        tap(project => this.store.dispatch(ProjectPageActions.loadAssignedUsers({ userIds: project.userIds })))
      );

    this.subs = this.store.select(getCurrentProjectId).pipe(
      filter(currentProjectId => Boolean(currentProjectId)),
      tap(projectId => {
        this.store.dispatch(IssuePageActions.loadIssues({ projectId }));
      })).subscribe();

    this.assignedUsers$ = this.store.select(getAssignedUsers);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}
