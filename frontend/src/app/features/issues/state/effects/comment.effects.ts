import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CommentService } from '@features/issues/services/comment.service';
import { CommentApiActions, CommentPageActions } from '@features/issues/state/actions';

@Injectable()
export class CommentEffects {

  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) { }

  loadCommentsByIssueId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentPageActions.loadCommentsByIssueId),
      mergeMap(action => {
        return this.commentService.getCommentsByIssueId(action.issueId).pipe(
          map(comments => CommentApiActions.loadCommentsSuccess({ comments })),
          catchError(error => of(CommentApiActions.loadCommentsFailure({ error })))
        )
      })
    );
  });

  createComment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CommentPageActions.createComment),
      mergeMap(action => {
        return this.commentService.createComment(action.comment).pipe(
          map(comment => {
            return CommentApiActions.createCommentSuccess({ comment });
          }),
          catchError(error => of(CommentApiActions.createCommentFailure({ error })))
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
          catchError(error => of(CommentApiActions.updateCommentFailure({ error })))
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
          catchError(error => of(CommentApiActions.deleteCommentFailure({ error })))
        )
      })
    );
  });

}
