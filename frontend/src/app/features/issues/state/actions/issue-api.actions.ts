import { createAction, props } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";

export const loadIssuesSuccess = createAction(
  '[Issue API] Load Success',
  props<{ issues: Issue[] }>()
);
export const loadIssuesFailure = createAction(
  '[Issue API] Load Fail',
  props<{ error: string }>()
);

export const updateIssueSuccess = createAction(
  '[Issue API] Update Issue Success',
  props<{ issue: Issue }>()
);
export const updateIssueFailure = createAction(
  '[Issue API] Update Issue Fail',
  props<{ error: string }>()
);
