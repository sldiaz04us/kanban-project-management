import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProjectState } from "./project.reducer";


const getProjectFeatureState = createFeatureSelector<ProjectState>('project');

// Selectors
export const getCurrentProjectId = createSelector(
  getProjectFeatureState,
  state => state.currentProjectId
)

// Compound selector
export const getCurrentProject = createSelector(
  getProjectFeatureState,
  getCurrentProjectId,
  (state, currentProjectId) => {
    return state.projects.find(p => p.id === currentProjectId);
  }
)

export const getProjects = createSelector(
  getProjectFeatureState,
  state => state.projects
)

export const getAssignedUsers = createSelector(
  getProjectFeatureState,
  state => state.assignedUsers
);

export const getError = createSelector(
  getProjectFeatureState,
  state => state.error
)
