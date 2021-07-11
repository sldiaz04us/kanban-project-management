import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CommentService } from '@features/issues/services/comment.service';
import { CommentApiActions, CommentPageActions } from '@features/issues/state/actions';
import { FeedbackService } from '@core/services/feedback.service';
import { FeedbackTypes } from '@core/enums/feedback-types.enum';

@Injectable()
export class CommentEffects {

  constructor(
    private actions$: Actions,
    private commentService: CommentService,
    private feedbackService: FeedbackService
  ) { }

  loadCommentsByIssueId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentPageActions.loadCommentsByIssueId),
      mergeMap(action => {
        return this.commentService.getCommentsByIssueId(action.issueId).pipe(
          map(comments => CommentApiActions.loadCommentsSuccess({ comments })),
          catchError(error => of(CommentApiActions.loadCommentsFailure({ error: error.body.error })))
        )
      })
    );
  });

  createComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentPageActions.createComment),
      mergeMap(action => {
        return this.commentService.createComment(action.comment).pipe(
          map(comment => CommentApiActions.createCommentSuccess({ comment })),
          catchError(error => {
            this.feedbackService.createNotification(
              FeedbackTypes.error,
              'Comment could not be created',
              error.body.error
            );
            return of(CommentApiActions.createCommentFailure({ error }));
          })
        )
      })
    );
  });

  updateComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentPageActions.updateComment),
      mergeMap(action => {
        return this.commentService.updateComment(action.comment).pipe(
          map(comment => {
            return CommentApiActions.updateCommentSuccess({ comment });
          }),
          catchError(error => {
            this.feedbackService.createNotification(
              FeedbackTypes.error,
              'Comment could not be updated',
              error.body.error
            );
            return of(CommentApiActions.updateCommentFailure({ error }));
          })
        )
      })
    );
  });

  deleteComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentPageActions.deleteComment),
      mergeMap(action => {
        return this.commentService.deleteComment(action.commentId).pipe(
          map(commentId => {
            return CommentApiActions.deleteCommentSuccess({ commentId });
          }),
          catchError(error => {
            this.feedbackService.createNotification(
              FeedbackTypes.error,
              'Comment could not be deleted',
              error.body.error
            );
            return of(CommentApiActions.deleteCommentFailure({ error }));
          })
        )
      })
    );
  });

}
