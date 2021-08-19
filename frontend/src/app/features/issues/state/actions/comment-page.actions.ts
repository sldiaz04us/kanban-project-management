import { createAction, props } from '@ngrx/store';

import { Comment } from '@core/interfaces/comment';

export const loadComments = createAction('[Comment] Load Comments');

export const loadCommentsByIssueId = createAction(
  '[Comment] Load Comments',
  props<{ issueId: string }>()
);

export const createComment = createAction(
  '[Comment] Create Comment',
  props<{ comment: Partial<Comment> }>()
);

export const updateComment = createAction(
  '[Comment] Update Comment',
  props<{ comment: Comment }>()
);

export const deleteComment = createAction(
  '[Comment] Delete Comment',
  props<{ commentId: string }>()
);
