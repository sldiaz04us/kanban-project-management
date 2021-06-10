import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { getCurrentUser } from '@features/user/state/user.selectors';
import { DateUtil } from '@core/utils/date';
import { Comment } from '@core/interfaces/comment';
import { CommentApiActions, CommentPageActions } from '@features/issues/state/actions';
import { QuillEditorUtil } from '@core/utils/quill';
import { getIsIssueBeingEdited } from '@features/issues/state/selectors/issue.selectors';
import { getAllComments } from '@features/issues/state/selectors/comment.selectors';

@Component({
  selector: 'issue-comments',
  templateUrl: './issue-comments.component.html',
  styleUrls: ['./issue-comments.component.scss']
})
export class IssueCommentsComponent implements OnInit, OnDestroy {
  @Input() issue: Issue;
  private destroy$ = new Subject();

  currentUser: User;
  comments: Comment[];

  isEditing = false;
  commentControl = new FormControl();

  defaultEditorOptions = QuillEditorUtil.getDefaultModuleOptions();

  isIssueBeingEdited: boolean;
  isLoading: boolean;

  constructor(
    private store: Store<AppState>,
    private actionSubject: ActionsSubject
  ) { }

  ngOnInit(): void {
    this.store.select(getAllComments).pipe(takeUntil(this.destroy$))
      .subscribe(comments => this.comments = comments);

    this.store.select(getCurrentUser).pipe(takeUntil(this.destroy$))
      .subscribe(user => this.currentUser = user);

    this.store.select(getIsIssueBeingEdited).pipe(takeUntil(this.destroy$))
      .subscribe(isEditing => this.isIssueBeingEdited = isEditing);

    this.actionSubject.pipe(
      takeUntil(this.destroy$),
      ofType(CommentApiActions.createCommentSuccess)
    ).subscribe(() => {
      this.isLoading = false;
      this.cancel();
    })
  }

  @HostListener('window:keyup', ['$event']) handleKeyUp(event: KeyboardEvent) {
    if (this.isEditing || this.isIssueBeingEdited) {
      return;
    }
    if (event.key === 'm' || event.key === 'M') {
      this.changeEditMode();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  editorCreated(editor: any): void {
    if (editor && editor.focus) {
      editor.focus();
    }
  }

  addComment(): void {
    if (this.commentControl.invalid) {
      return;
    }
    this.isLoading = true;

    const now = DateUtil.getNow();
    const newComment: Comment = {
      id: uuidv4(),
      content: this.commentControl.value,
      createdAt: now,
      updatedAt: now,
      issueId: this.issue.id,
      user: this.currentUser,
      isEdited: false
    }
    this.store.dispatch(CommentPageActions.createComment({ comment: newComment }))
  }

  onEditComment(event: { commentId: string, content: string }): void {
    const comment: Comment = {
      ...this.comments.find(comment => comment.id === event.commentId),
      content: event.content,
      isEdited: true
    };
    this.store.dispatch(CommentPageActions.updateComment({ comment }));
  }

  onDeleteComment(commentId: string): void {
    this.store.dispatch(CommentPageActions.deleteComment({ commentId }));
  }

  changeEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  onFocus(): void {
    this.changeEditMode();
  }

  cancel(): void {
    this.commentControl.setValue('');
    this.changeEditMode();
  }

}
