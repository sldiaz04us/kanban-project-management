import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";

import { of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ProjectService } from "@features/project/services/project.service";
import { ProjectPageActions, ProjectApiActions } from '@features/project/state/actions';
import { getCurrentProject } from "@features/project/state/project.selectors";
import { IssuePageActions } from "@features/issues/state/actions";

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private store: Store
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


  createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.createProject),
      mergeMap(action => {
        return this.projectService.createProject(action.project).pipe(
          mergeMap(project => {
            return [
              ProjectPageActions.setCurrentProject({ projectId: project.id }),
              ProjectApiActions.createProjectSuccess({ project })
            ]
          }),
          catchError(error => of(ProjectApiActions.createProjectFailure({ error })))
        )
      })
    );
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

  deleteProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.deleteProject),
      mergeMap(action => {
        return this.projectService.deleteProject(action.projectId).pipe(
          mergeMap(projectId => {
            return [
              ProjectApiActions.deleteProjectSuccess({ projectId }),
              IssuePageActions.deleteAllIssuesByProjectId({ projectId })
            ]
          }),
          catchError(error => of(ProjectApiActions.deleteProjectFailure({ error })))
        )
      })
    );
  });

  removePeople$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.removePeople),
      concatLatestFrom(() => this.store.select(getCurrentProject)),
      mergeMap(([action, currentProject]) => {
        const projectToUpdate = { ...currentProject };
        projectToUpdate.users = currentProject.users.filter(u => u.id !== action.userId);
        return this.projectService.updateProject(projectToUpdate).pipe(
          map(project => ProjectApiActions.updateProjectSuccess({ project })),
          catchError(error => of(ProjectApiActions.updateProjectFailure({ error })))
        )
      })
    );
  });
}
