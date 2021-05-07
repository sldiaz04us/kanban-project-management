import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Project } from '@core/interfaces/project';
import { State } from '@core/interfaces/app.state';
import { ProjectPageActions } from '@features/project/state/actions';
import { getProjects, getCurrentProject } from '@features/project/state/project.selectors';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent implements OnInit {
  projects$: Observable<Project[]>;
  currentProject$: Observable<Project>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(ProjectPageActions.loadProjects());
    this.projects$ = this.store.select(getProjects);
    this.currentProject$ = this.store.select(getCurrentProject);
  }

}
