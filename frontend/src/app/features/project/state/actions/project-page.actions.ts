import { createAction, props } from "@ngrx/store";

import { Project } from "@core/interfaces/project";

export const setCurrentProject = createAction(
  '[Project Page] Set Current Project',
  props<{ projectId: string }>()
)

export const loadProjects = createAction('[Project Page] Load');

export const createProject = createAction(
  '[Project Page] Create Project',
  props<{ project: Project }>()
);

export const updateProject = createAction(
  '[Project Page] Update Project',
  props<{ project: Project }>()
);

export const deleteProject = createAction(
  '[Project Page] Delete Project',
  props<{ projectId: string }>()
);

export const removePeople = createAction(
  '[Project Page] Remove People',
  props<{ userId: string }>()
);
