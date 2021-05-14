import { createAction, props } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";

export const loadIssues = createAction(
  '[Issue Page] Load',
  props<{ projectId: string }>()
);

export const updateIssue = createAction(
  '[Issue Page] Update Issue',
  props<{ issue: Issue }>()
);
