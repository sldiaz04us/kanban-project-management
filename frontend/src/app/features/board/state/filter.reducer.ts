import { createReducer, on } from '@ngrx/store';

import * as FilterActions from './filter.actions';


export const filterFeatureKey = 'filter';

export interface State {
  searchTerm: string;
  userIds: string[];
  onlyMyIssues: boolean;
  recentlyUpdated: boolean;
}

export const initialState: State = {
  searchTerm: '',
  userIds: [],
  onlyMyIssues: false,
  recentlyUpdated: false
};


export const reducer = createReducer(
  initialState,
  on(FilterActions.setSearchTermFilter, (state, action): State => {
    return {
      ...state,
      searchTerm: action.searchTerm
    }
  }),
  on(FilterActions.toggleUser, (state, action): State => {
    const userId = action.userId;
    const hasUser = state.userIds.includes(userId);
    const userIdsUpdated = hasUser
      ? state.userIds.filter(uId => uId !== userId)
      : [...state.userIds, userId]
    return {
      ...state,
      userIds: userIdsUpdated
    }
  }),
  on(FilterActions.toggleOnlyMyIssues, state => {
    return {
      ...state,
      onlyMyIssues: !state.onlyMyIssues
    }
  }),
  on(FilterActions.toggleRecentlyUpdated, state => {
    return {
      ...state,
      recentlyUpdated: !state.recentlyUpdated
    }
  }),
  on(FilterActions.clearAllFilters, () => {
    return initialState;
  })

);

