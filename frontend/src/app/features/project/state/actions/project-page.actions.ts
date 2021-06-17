import { createAction, props } from "@ngrx/store";

import { Project } from "@core/interfaces/project";

export const setCurrentProject = createAction(
  '[Project Page] Set Current Project',
  props<{ projectId: string }>()
)

export const loadProjects = createAction('[Project Page] Load Projects');

export const updateProject = createAction(
  '[Project Page] Update Project',
  props<{ project: Project }>()
);
