import { createReducer, on } from "@ngrx/store";

import { Project } from "@core/interfaces/project";
import { ProjectPageActions, ProjectApiActions } from './actions';

export interface ProjectState {
  currentProjectId: string | null;
  projects: Project[];
  error: string;
}

const initialState: ProjectState = {
  currentProjectId: '130921',
  projects: [],
  error: ''
}

export const projectReducer = createReducer<ProjectState>(
  initialState,
  on(ProjectPageActions.setCurrentProject, (state, action): ProjectState => {
    return {
      ...state,
      currentProjectId: action.projectId
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
  }),
  on(ProjectApiActions.createProjectSuccess, (state, action): ProjectState => {
    return {
      ...state,
      projects: [...state.projects, action.project],
      error: ''
    }
  }),
  on(ProjectApiActions.createProjectFailure, (state, action): ProjectState => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(ProjectApiActions.updateProjectSuccess, (state, action): ProjectState => {
    const updatedProjects = state.projects.map(
      project => action.project.id === project.id ? action.project : project
    );
    return {
      ...state,
      projects: updatedProjects,
      error: ''
    }
  }),
  on(ProjectApiActions.updateProjectFailure, (state, action): ProjectState => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(ProjectApiActions.deleteProjectSuccess, (state, action): ProjectState => {
    const updatedProjects = state.projects.filter(p => p.id !== action.projectId)
    return {
      ...state,
      projects: updatedProjects,
      error: ''
    }
  }),
  on(ProjectApiActions.deleteProjectFailure, (state, action): ProjectState => {
    return {
      ...state,
      error: action.error
    }
  }),
)
