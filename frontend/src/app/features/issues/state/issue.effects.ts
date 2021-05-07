import { Injectable } from "@angular/core"

import { Actions, createEffect, ofType } from "@ngrx/effects"

import { of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/operators"

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
      switchMap(() => {
        return this.issueService.getIssues().pipe(
          map(issues => IssueApiActions.loadIssuesSuccess({ issues })),
          catchError(error => of(IssueApiActions.loadIssuesFailure({ error })))
        )
      })
    )
  });

}
