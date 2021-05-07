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
