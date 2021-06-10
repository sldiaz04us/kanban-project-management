import { createReducer, on } from '@ngrx/store';

import { Comment } from '@core/interfaces/comment';
import { CommentApiActions } from '@features/issues/state/actions';


export interface State {
  comments: Comment[];
  error: string;
}

export const initialState: State = {
  comments: [],
  error: ''
};


export const reducer = createReducer(
  initialState,
  on(CommentApiActions.loadCommentsSuccess, (state, action): State => {
    return {
      ...state,
      comments: action.comments
    }
  }),
  on(CommentApiActions.loadCommentsFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(CommentApiActions.createCommentSuccess, (state, action): State => {
    return {
      ...state,
      comments: [...state.comments, action.comment]
    }
  }),
  on(CommentApiActions.createCommentFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(CommentApiActions.updateCommentSuccess, (state, action): State => {
    const commentsUpdated = state.comments.map(c => c.id === action.comment.id ? action.comment : c);
    return {
      ...state,
      comments: commentsUpdated
    }
  }),
  on(CommentApiActions.updateCommentFailure, (state, action): State => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(CommentApiActions.deleteCommentSuccess, (state, action): State => {
    const commentsUpdated = state.comments.filter(c => c.id !== action.commentId);
    return {
      ...state,
      comments: commentsUpdated
    }
  })
);

