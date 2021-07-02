import { createAction, props } from "@ngrx/store";

import { Issue } from "@core/interfaces/issue";


export const loadIssues = createAction(
  '[Issue Page] Load',
  props<{ projectId: string }>()
);

export const createIssue = createAction(
  '[Issue Page] Create',
  props<{ issue: Issue }>()
);

export const updateIssue = createAction(
  '[Issue Page] Update Issue',
  props<{ issue: Issue }>()
);

export const deleteIssue = createAction(
  '[Issue Page] Delete Issue',
  props<{ issueId: string }>()
);

export const deleteAllIssuesByProjectId = createAction(
  '[Issue Page] Delete All Issues By ProjectId',
  props<{ projectId: string }>()
);

export const setIssueEditing = createAction(
  '[Issue Page] Set Issue Editing',
  props<{ isEditing: boolean }>()
);
