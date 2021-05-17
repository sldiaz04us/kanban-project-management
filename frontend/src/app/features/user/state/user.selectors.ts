import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';

const getUserFeatureState = createFeatureSelector<fromUser.UserState>(fromUser.userFeatureKey);

export const getCurrentUserId = createSelector(
  getUserFeatureState,
  state => state.currentUserId
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  getCurrentUserId,
  (state, currentUserId) => {
    return state.users.find(u => u.id === currentUserId);
  }
);

export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users
);

