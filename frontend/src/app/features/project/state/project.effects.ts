import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { from, of } from "rxjs";
import { catchError, map, switchMap, mergeMap, toArray } from 'rxjs/operators';

import { ProjectService } from "../services/project.service";
import { ProjectPageActions, ProjectApiActions } from '../state/actions';
import { UserService } from "@core/services/user.service";

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

  loadAssignedUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.loadAssignedUsers),
      mergeMap(action => {
        return from(action.userIds).pipe(
          mergeMap(userId => this.userService.getUserById(userId)),
          toArray(),
          map(assignedUsers => ProjectApiActions.loadAssignedUsersSuccess({ assignedUsers })),
          catchError(error => of(ProjectApiActions.loadAssignedUsersFailure({ error })))
        )
      })
    )
  });
}
