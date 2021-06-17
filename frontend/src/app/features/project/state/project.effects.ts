import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { from, of } from "rxjs";
import { catchError, map, mergeMap, toArray } from 'rxjs/operators';

import { ProjectService } from "../services/project.service";
import { ProjectPageActions, ProjectApiActions } from '@features/project/state/actions';
import { UserService } from "@features/user/services/user.service";

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private userService: UserService
  ) { }

  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.loadProjects),
      mergeMap(() => {
        return this.projectService.getProjects().pipe(
          map(projects => ProjectApiActions.loadProjectsSuccess({ projects })),
          catchError(error => of(ProjectApiActions.loadProjectsFailure({ error })))
        )
      })
    )
  });

  updateProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.updateProject),
      mergeMap(action => {
        return this.projectService.updateProject(action.project).pipe(
          map(project => ProjectApiActions.updateProjectSuccess({ project })),
          catchError(error => of(ProjectApiActions.updateProjectFailure({ error })))
        )
      })
    );
  });
}
