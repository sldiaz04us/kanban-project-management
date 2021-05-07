import { createAction, props } from "@ngrx/store";

export const setCurrentProject = createAction(
  '[Project Page] Set Current Project',
  props<{ currentProjectId: string }>()
)

export const loadProjects = createAction('[Project Page] Load');
