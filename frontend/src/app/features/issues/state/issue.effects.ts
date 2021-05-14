import { Injectable } from "@angular/core"

import { Actions, createEffect, ofType } from "@ngrx/effects"

import { of } from "rxjs"
import { catchError, map, mergeMap } from 'rxjs/operators';

import { IssueService } from "../services/issue.service"
import { IssueApiActions, IssuePageActions } from "./actions"

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

}
