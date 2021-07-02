import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { NzModalService } from 'ng-zorro-antd/modal';

import { skip, take } from 'rxjs/operators';

import { Comment } from '@core/interfaces/comment';
import { QuillEditorUtil } from '@core/utils/quill';
import { AppState } from '@core/interfaces/app.state';
import { setIssueEditing } from '@features/issues/state/actions/issue-page.actions';
import { CommentApiActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-comments-item',
  templateUrl: './issue-comments-item.component.html',
  styleUrls: ['./issue-comments-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssueCommentsItemComponent {
  @Input() comment: Comment;
  @Input() canBeEditByCurrentUser: boolean;
  @Output() editCommentEvent = new EventEmitter<{ commentId: string, content: string }>();
  @Output() deleteCommentEvent = new EventEmitter<string>();

  isEditing = false;
  isLoading: boolean;
  commentEditControl = new FormControl();

  defaultEditorOptions = QuillEditorUtil.getDefaultModuleOptions();

  constructor(
    private modalService: NzModalService,
    private store: Store<AppState>,
    private actionSubject: ActionsSubject
  ) { }

  editorCreated(editor: any): void {
    if (editor && editor.focus) {
      editor.focus();
    }
  }

  onEditComment(content: Object): void {
    this.commentEditControl.setValue(content);
    this.changeEditMode();
    this.store.dispatch(setIssueEditing({ isEditing: true }));
  }

  editComment(id: string): void {
    if (this.commentEditControl.invalid) {
      return;
    }
    this.isLoading = true;
    this.actionSubject.pipe(
      ofType(
        CommentApiActions.updateCommentSuccess,
        CommentApiActions.updateCommentFailure
      ),
      take(1)
    ).subscribe(() => {
      this.isLoading = false;
      this.changeEditMode();
      this.store.dispatch(setIssueEditing({ isEditing: false }));
    })
    this.editCommentEvent.next({ commentId: id, content: this.commentEditControl.value });
  }

  onDeleteComment(id: string): void {
    this.modalService.confirm({
      nzTitle: 'Delete this comment?',
      nzContent: "Once you delete, it's gone for good.",
      nzOkText: 'Delete',
      nzOkDanger: true,
      nzOnOk: () => new Promise(resolve => {
        this.actionSubject.pipe(
          skip(1), // because actionSubject is a BehaviorSubject and the user can delete more than one comment.
          ofType(
            CommentApiActions.deleteCommentSuccess,
            CommentApiActions.deleteCommentFailure
          ),
          take(1)
        ).subscribe(() => {
          resolve();
        })
        this.deleteCommentEvent.next(id);
      })
    });
  }

  cancel() {
    this.commentEditControl.setValue('');
    this.changeEditMode();
    this.store.dispatch(setIssueEditing({ isEditing: false }));
  }

  changeEditMode(): void {
    this.isEditing = !this.isEditing;
  }

}
