import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProjectState } from './project.reducer';
import { Project } from '@core/interfaces/project';

const getProjectFeatureState = createFeatureSelector<ProjectState>('project');

// Selectors
export const getCurrentProjectId = createSelector(
  getProjectFeatureState,
  (state) => state.currentProjectId
);

// Compound selector
export const getCurrentProject = createSelector(
  getProjectFeatureState,
  getCurrentProjectId,
  (state, currentProjectId) => {
    return state.projects.find((p) => p.id === currentProjectId);
  }
);

export const isCurrentProject = createSelector(
  getProjectFeatureState,
  getCurrentProjectId,
  (state, currentProjectId) => {
    return !!state.projects.find((p) => p.id === currentProjectId);
  }
);

export const getProjects = createSelector(
  getProjectFeatureState,
  (state) => state.projects
);

export const getProjectById = createSelector(
  getProjects,
  (projects: Project[], props: { projectId: string }) =>
    projects.find((p) => p.id === props.projectId)
);

export const getAssignedUsers = createSelector(
  getProjectFeatureState,
  getCurrentProjectId,
  (state, currentProjectId) => {
    return state.projects.find((p) => p.id === currentProjectId)?.assignees;
  }
);

export const getCurrentProjectKey = createSelector(
  getProjectFeatureState,
  getCurrentProject,
  (_, currentProject) => {
    return currentProject.key;
  }
);

export const getProjectsError = createSelector(
  getProjectFeatureState,
  (state) => state.error
);
