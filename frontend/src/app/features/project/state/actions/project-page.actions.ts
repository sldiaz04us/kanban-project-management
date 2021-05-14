import { createAction, props } from "@ngrx/store";

export const setCurrentProject = createAction(
  '[Project Page] Set Current Project',
  props<{ projectId: string }>()
)

export const loadProjects = createAction('[Project Page] Load');

export const loadAssignedUsers = createAction(
  '[Project Page] Load Assigned Users',
  props<{ userIds: string[] }>()
);
