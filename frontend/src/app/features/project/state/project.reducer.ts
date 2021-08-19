import { createReducer, on } from '@ngrx/store';

import { Project } from '@core/interfaces/project';
import { ProjectPageActions, ProjectApiActions } from './actions';

export interface ProjectState {
  currentProjectId: string | null;
  projects: Project[];
  error: string;
}

const initialState: ProjectState = {
  currentProjectId: '611e1977bd926c6f3877a0f5',
  projects: [],
  error: null,
};

export const projectReducer = createReducer<ProjectState>(
  initialState,
  on(ProjectPageActions.setCurrentProject, (state, action): ProjectState => {
    return {
      ...state,
      currentProjectId: action.projectId,
    };
  }),
  on(ProjectApiActions.loadProjectsSuccess, (state, action): ProjectState => {
    return {
      ...state,
      projects: action.projects,
      error: null,
    };
  }),
  on(ProjectApiActions.loadProjectsFailure, (state, action): ProjectState => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(ProjectApiActions.createProjectSuccess, (state, action): ProjectState => {
    return {
      ...state,
      projects: [...state.projects, action.project],
    };
  }),
  on(ProjectApiActions.updateProjectSuccess, (state, action): ProjectState => {
    const updatedProjects = state.projects.map((project) =>
      action.project.id === project.id ? action.project : project
    );
    return {
      ...state,
      projects: updatedProjects,
    };
  }),

  on(ProjectApiActions.deleteProjectSuccess, (state, action): ProjectState => {
    const updatedProjects = state.projects.filter(
      (p) => p.id !== action.projectId
    );
    return {
      ...state,
      projects: updatedProjects,
    };
  })
);
