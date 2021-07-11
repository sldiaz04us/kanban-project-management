import { createReducer, on } from '@ngrx/store';

import { Comment } from '@core/interfaces/comment';
import { CommentApiActions } from '@features/issues/state/actions';


export interface State {
  comments: Comment[];
  error: string;
}

export const initialState: State = {
  comments: [],
  error: null
};


export const reducer = createReducer(
  initialState,
  on(CommentApiActions.loadCommentsSuccess, (state, action): State => {
    return {
      ...state,
      comments: action.comments,
      error: null
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
  on(CommentApiActions.updateCommentSuccess, (state, action): State => {
    const commentsUpdated = state.comments.map(c => c.id === action.comment.id ? action.comment : c);
    return {
      ...state,
      comments: commentsUpdated
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

