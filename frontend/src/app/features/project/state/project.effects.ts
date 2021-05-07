import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { ProjectService } from "../services/project.service";
import { ProjectPageActions, ProjectApiActions } from '../state/actions';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) { }

  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.loadProjects),
      switchMap(() => {
        return this.projectService.getProjects().pipe(
          map(projects => ProjectApiActions.loadProjectsSuccess({ projects })),
          catchError(error => of(ProjectApiActions.loadProjectsFailure({ error })))
        )
      })
    )
  })
}
