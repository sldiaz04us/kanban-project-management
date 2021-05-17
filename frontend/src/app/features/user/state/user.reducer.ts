import { User } from '@core/interfaces/user';
import { createReducer, on } from '@ngrx/store';

import * as fromUserActions from './actions/user.actions';


export const userFeatureKey = 'user';

export interface UserState {
  currentUserId: string;
  users: User[];
  error: string;
}

export const initialState: UserState = {
  currentUserId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
  users: [],
  error: ''
};


export const reducer = createReducer(
  initialState,
  on(fromUserActions.loadUsersSuccess, (state, action): UserState => {
    return {
      ...state,
      users: action.users
    }
  }),
  on(fromUserActions.loadUsersFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error
    }
  })

);

