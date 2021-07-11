import { createSelector } from '@ngrx/store';

import * as fromCommentReducer from '@features/issues/state/reducers/comment.reducer';
import * as fromSelectors from '@features/issues/state/selectors/index';

const getComments = (state: fromCommentReducer.State) => state.comments;
const getError = (state: fromCommentReducer.State) => state.error;

export const getAllComments = createSelector(
  fromSelectors.getCommentState,
  getComments
);

export const getCommentsError = createSelector(
  fromSelectors.getCommentState,
  getError
);
