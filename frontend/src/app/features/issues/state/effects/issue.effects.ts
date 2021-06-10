import { Injectable } from "@angular/core"

import { Actions, createEffect, ofType } from "@ngrx/effects"

import { of } from "rxjs"
import { catchError, map, mergeMap } from 'rxjs/operators';

import { IssueService } from "@features/issues/services/issue.service"
import { IssueApiActions, IssuePageActions } from "@features/issues/state/actions"
import { ProjectPageActions } from "@features/project/state/actions";

@Injectable()
export class IssueEffects {
  constructor(
    private actions$: Actions,
    private issueService: IssueService
  ) { }

  loadIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IssuePageActions.loadIssues),
      mergeMap((action) => {
        return this.issueService.getIssuesByProjectId(action.projectId).pipe(
          map(issues => IssueApiActions.loadIssuesSuccess({ issues })),
          catchError(error => of(IssueApiActions.loadIssuesFailure({ error })))
        )
      })
    )
  });

  createIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IssuePageActions.createIssue),
      mergeMap(action => {
        return this.issueService.createIssue(action.issue).pipe(
          mergeMap(issue => {
            return [
              IssueApiActions.createIssueSuccess({ issue }),
              ProjectPageActions.updateProject({ project: action.project })
            ];
          }),
          catchError(error => of(IssueApiActions.createIssueFailure({ error })))
        )
      })
    );
  })

  updateIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IssuePageActions.updateIssue),
      mergeMap((action) => {
        return this.issueService.updateIssue(action.issue).pipe(
          map(issue => IssueApiActions.updateIssueSuccess({ issue })),
          catchError(error => of(IssueApiActions.updateIssueFailure({ error })))
        )
      })
    )
  });

  deleteIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IssuePageActions.deleteIssue),
      mergeMap(action => {
        return this.issueService.deleteIssue(action.issueId).pipe(
          mergeMap(issueId => {
            return [
              IssueApiActions.deleteIssueSuccess({ issueId }),
              ProjectPageActions.updateProject({ project: action.project })
            ];
          }),
          catchError(error => of(IssueApiActions.deleteIssueFailure({ error })))
        )
      })
    );
  });

}
