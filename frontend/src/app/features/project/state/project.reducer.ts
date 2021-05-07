import { createReducer, on } from "@ngrx/store";

import { Project } from "@core/interfaces/project";
import { ProjectPageActions, ProjectApiActions } from './actions';

export interface ProjectState {
  currentProjectId: string | null;
  projects: Project[];
  error: string;
}

const initialState: ProjectState = {
  currentProjectId: null,
  projects: [],
  error: ''
}

export const projectReducer = createReducer<ProjectState>(
  initialState,
  on(ProjectPageActions.setCurrentProject, (state, action): ProjectState => {
    return {
      ...state,
      currentProjectId: action.currentProjectId
    }
  }),
  on(ProjectApiActions.loadProjectsSuccess, (state, action): ProjectState => {
    return {
      ...state,
      projects: action.projects,
      error: ''
    }
  }),
  on(ProjectApiActions.loadProjectsFailure, (state, action): ProjectState => {
    return {
      ...state,
      error: action.error
    }
  })
)
