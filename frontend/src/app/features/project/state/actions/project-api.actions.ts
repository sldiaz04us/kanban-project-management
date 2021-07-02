import { createAction, props } from "@ngrx/store";

import { Project } from "@core/interfaces/project";

export const loadProjectsSuccess = createAction(
  '[Project API] Load Success',
  props<{ projects: Project[] }>()
)
export const loadProjectsFailure = createAction(
  '[Project API] Load Fail',
  props<{ error: string }>()
);

export const createProjectSuccess = createAction(
  '[Project API] Create Project Success',
  props<{ project: Project }>()
)
export const createProjectFailure = createAction(
  '[Project API] Create Project Fail',
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

export const deleteProjectSuccess = createAction(
  '[Project API] Delete Project Success',
  props<{ projectId: string }>()
)
export const deleteProjectFailure = createAction(
  '[Project API] Delete Project Fail',
  props<{ error: string }>()
);
