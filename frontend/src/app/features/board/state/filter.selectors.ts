import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFilter from './filter.reducer';

const getFilterFeatureSelector = createFeatureSelector<fromFilter.State>(fromFilter.filterFeatureKey);

export const getFilterState = createSelector(
  getFilterFeatureSelector,
  state => state
);

export const getUserIds = createSelector(
  getFilterFeatureSelector,
  state => state.userIds
);

export const getOnlyMyIssues = createSelector(
  getFilterFeatureSelector,
  state => state.onlyMyIssues
);

export const getRecentlyUpdatedIssues = createSelector(
  getFilterFeatureSelector,
  state => state.recentlyUpdated
);

export const isAnyFilter = createSelector(
  getFilterFeatureSelector,
  state => !!state.searchTerm || !!state.userIds.length || !!state.onlyMyIssues || !!state.recentlyUpdated
);

