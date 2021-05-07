import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ProjectState } from "./project.reducer";


const getProjectFeatureState = createFeatureSelector<ProjectState>('projects');

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
    return currentProjectId
      ? state.projects.find(p => p.id === currentProjectId)
      : state.projects.find(p => p.id === '140892');
  }
)

export const getProjects = createSelector(
  getProjectFeatureState,
  state => state.projects
)

export const getError = createSelector(
  getProjectFeatureState,
  state => state.error
)
