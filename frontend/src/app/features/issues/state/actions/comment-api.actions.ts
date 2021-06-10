import { createAction, props } from '@ngrx/store';

import { Comment } from '@core/interfaces/comment';


export const loadCommentsSuccess = createAction(
  '[Comment] Load Comments Success',
  props<{ comments: Comment[] }>()
);
export const loadCommentsFailure = createAction(
  '[Comment] Load Comments Failure',
  props<{ error: string }>()
);

export const createCommentSuccess = createAction(
  '[Comment] Create Comment Success',
  props<{ comment: Comment }>()
);
export const createCommentFailure = createAction(
  '[Comment] Create Comment Fail',
  props<{ error: string }>()
);

export const updateCommentSuccess = createAction(
  '[Comment] Update Comment Success',
  props<{ comment: Comment }>()
);
export const updateCommentFailure = createAction(
  '[Comment] Update Comment Fail',
  props<{ error: string }>()
);

export const deleteCommentSuccess = createAction(
  '[Comment] Delete Comment Success',
  props<{ commentId: string }>()
);
export const deleteCommentFailure = createAction(
  '[Comment] Delete Comment Fail',
  props<{ error: string }>()
);
