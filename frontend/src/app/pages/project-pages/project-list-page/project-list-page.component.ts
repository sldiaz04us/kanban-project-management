import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';

import { combineLatest, Observable, of } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

import { Project } from '@core/interfaces/project';
import {
  getProjectsError,
  getProjects,
} from '@features/project/state/project.selectors';
import { setCurrentProject } from '@features/project/state/actions/project-page.actions';
import * as fromFilterActions from '@features/board/state/filter.actions';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListPageComponent implements OnInit {
  projects$: Observable<Project[]>;
  projectsForm!: FormGroup;
  projectsError$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{}>,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('All projects - Kanban Project Management');
  }

  ngOnInit(): void {
    this.projectsForm = this.fb.group({
      search: [null],
    });

    this.projects$ = combineLatest([
      this.store.select(getProjects),
      this.projectsForm.valueChanges.pipe(startWith({ search: '' })),
    ]).pipe(
      switchMap(([projects, term]) => {
        const searchTerm = term.search as string;
        return of(
          projects?.filter((p) =>
            Boolean(searchTerm)
              ? p.name.toLowerCase().includes(searchTerm.toLowerCase())
              : true
          )
        );
      })
    );
    this.projectsError$ = this.store.select(getProjectsError);
  }

  sortByNameFn(a: Project, b: Project): number {
    return a.name.localeCompare(b.name);
  }

  sortByKeyFn(a: Project, b: Project): number {
    return a.key.localeCompare(b.key);
  }

  sortByLeaderFn(a: Project, b: Project): number {
    return a.leader.name.localeCompare(b.leader.name);
  }

  changeCurrentProject(projectId: string): void {
    this.store.dispatch(setCurrentProject({ projectId }));
    this.store.dispatch(fromFilterActions.clearAllFilters());
    this.router.navigateByUrl('board');
  }
}
