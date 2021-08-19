import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ProjectService } from '@features/project/services/project.service';
import {
  ProjectPageActions,
  ProjectApiActions,
} from '@features/project/state/actions';
import { getCurrentProject } from '@features/project/state/project.selectors';
import { IssuePageActions } from '@features/issues/state/actions';
import { FeedbackService } from '@core/services/feedback.service';
import { FeedbackTypes } from '@core/enums/feedback-types.enum';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private store: Store,
    private feedbackService: FeedbackService
  ) {}

  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.loadProjects),
      mergeMap(() => {
        return this.projectService.findAll().pipe(
          map((projects) => {
            return ProjectApiActions.loadProjectsSuccess({ projects });
          }),
          catchError((error) => {
            this.feedbackService.createNotification(
              FeedbackTypes.error,
              'Projects could not be loaded',
              error.message
            );
            return of(ProjectApiActions.loadProjectsFailure({ error }));
          })
        );
      })
    );
  });

  createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.createProject),
      mergeMap((action) => {
        return this.projectService.create(action.project).pipe(
          mergeMap((project) => {
            return [
              ProjectPageActions.setCurrentProject({ projectId: project.id }),
              ProjectApiActions.createProjectSuccess({ project }),
            ];
          }),
          catchError((error) => {
            this.feedbackService.createNotification(
              FeedbackTypes.error,
              'Project could not be created',
              error.message
            );
            return of(ProjectApiActions.createProjectFailure({ error }));
          })
        );
      })
    );
  });

  updateProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.updateProject),
      mergeMap((action) => {
        return this.projectService
          .update(action.project.id, action.project)
          .pipe(
            map((project) => {
              this.feedbackService.createMessage(
                FeedbackTypes.success,
                'Project successfully updated.'
              );
              return ProjectApiActions.updateProjectSuccess({ project });
            }),
            catchError((error) => {
              this.feedbackService.createNotification(
                FeedbackTypes.error,
                'Project could not be updated',
                error.message
              );
              return of(ProjectApiActions.updateProjectFailure({ error }));
            })
          );
      })
    );
  });

  deleteProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.deleteProject),
      mergeMap((action) => {
        return this.projectService.remove(action.projectId).pipe(
          mergeMap((projectId) => {
            this.feedbackService.createMessage(
              FeedbackTypes.success,
              'Project successfully moved to trash.'
            );
            return [
              ProjectApiActions.deleteProjectSuccess({ projectId }),
              IssuePageActions.deleteAllIssuesByProjectId({ projectId }),
            ];
          }),
          catchError((error) => {
            this.feedbackService.createNotification(
              FeedbackTypes.error,
              'Project could not be moved to trash',
              error.message
            );
            return of(ProjectApiActions.deleteProjectFailure({ error }));
          })
        );
      })
    );
  });

  removePeople$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectPageActions.removePeople),
      concatLatestFrom(() => this.store.select(getCurrentProject)),
      mergeMap(([action, currentProject]) => {
        const projectToUpdate = { ...currentProject };
        projectToUpdate.assignees = currentProject.assignees.filter(
          (u) => u.id !== action.userId
        );
        return this.projectService
          .update(projectToUpdate.id, projectToUpdate)
          .pipe(
            map((project) =>
              ProjectApiActions.updateProjectSuccess({ project })
            ),
            catchError((error) => {
              this.feedbackService.createNotification(
                FeedbackTypes.error,
                'User could not be removed',
                error.message
              );
              return of(ProjectApiActions.updateProjectFailure({ error }));
            })
          );
      })
    );
  });
}
