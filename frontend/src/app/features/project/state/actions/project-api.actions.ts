import { createAction, props } from "@ngrx/store";

import { Project } from "@core/interfaces/project";
import { User } from "@core/interfaces/user";

export const loadProjectsSuccess = createAction(
  '[Project API] Load Success',
  props<{ projects: Project[] }>()
)
export const loadProjectsFailure = createAction(
  '[Project API] Load Fail',
  props<{ error: string }>()
);

export const loadAssignedUsersSuccess = createAction(
  '[Project API] Load Assigned Users Success',
  props<{ assignedUsers: User[] }>()
);
export const loadAssignedUsersFailure = createAction(
  '[Project API] Load Assigned Users Fail',
  props<{ error: string }>()
);

export const updateProjectSuccess = createAction(
  '[Project API] Update Project Success',
  props<{ project: Project }>()
)
export const updateProjectFailure = createAction(
  '[Project API] Update Project Fail',
  props<{ error: string }>()
);
