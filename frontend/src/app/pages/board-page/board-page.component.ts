import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';
import { getAssignedUsers, getCurrentProject } from '@features/project/state/project.selectors';
import { IssuePageActions } from '@features/issues/state/actions';
import { AppState } from '@core/interfaces/app.state';
import { User } from '@core/interfaces/user';
import { getIssuesError } from '@features/issues/state/selectors/issue.selectors';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent implements OnInit {
  currentProject$: Observable<Project>;
  assignees$: Observable<User[]>;
  issuesError$: Observable<string>;

  constructor(private store: Store<AppState>, private titleService: Title) {
    this.titleService.setTitle('Project board - Kanban Project Management');
  }

  ngOnInit() {
    this.currentProject$ = this.store.select(getCurrentProject)
      .pipe(
        filter(project => Boolean(project)),
        tap(project => this.store.dispatch(IssuePageActions.loadIssues({ projectId: project.id }))
        )
      );

    this.assignees$ = this.store.select(getAssignedUsers);
    this.issuesError$ = this.store.select(getIssuesError);
  }

}
