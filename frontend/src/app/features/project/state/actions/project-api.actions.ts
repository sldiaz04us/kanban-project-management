import { Project } from "@core/interfaces/project";
import { createAction, props } from "@ngrx/store";

export const loadProjectsSuccess = createAction(
  '[Project API] Load Success',
  props<{ projects: Project[] }>()
)
export const loadProjectsFailure = createAction(
  '[Project API] Load Fail',
  props<{ error: string }>()
);
