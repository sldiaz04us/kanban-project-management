import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActionsSubject, Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';

import { take } from 'rxjs/operators';

import { Issue } from '@core/interfaces/issue';
import { IssueApiActions, IssuePageActions } from '@features/issues/state/actions';
import { AppState } from '@core/interfaces/app.state';
import { QuillEditorUtil } from '@core/utils/quill';
import { setIssueEditing } from '@features/issues/state/actions/issue-page.actions';

@Component({
  selector: 'issue-description',
  templateUrl: './issue-description.component.html',
  styleUrls: ['./issue-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssueDescriptionComponent implements OnChanges {
  @Input() issue: Issue

  descriptionControl: FormControl;
  isEditing = false;
  isLoading: boolean;

  ops = QuillEditorUtil.getDefaultOps();
  editorOptions = QuillEditorUtil.getModuleOptionsWithMedia();

  constructor(private store: Store<AppState>, private actionSubject: ActionsSubject) { }

  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (issueChange.previousValue !== issueChange.currentValue) {
      this.descriptionControl = new FormControl(this.issue.description);
    }
  }

  editorCreated(editor: any): void {
    if (editor && editor.focus) {
      editor.focus();
    }
  }

  changeEditMode(): void {
    this.isEditing = !this.isEditing;
    this.store.dispatch(setIssueEditing({ isEditing: this.isEditing }));
  }

  save(): void {
    this.isLoading = true;
    this.actionSubject.pipe(
      ofType(
        IssueApiActions.updateIssueSuccess,
        IssueApiActions.updateIssueFailure,
      ),
      take(1)
    ).subscribe(() => {
      this.isLoading = false;
      this.changeEditMode();
    })

    let description = this.descriptionControl.value;

    // Quill editor adds a new line (\n) always, even without content
    if (QuillEditorUtil.isContentEmpty(description)) {
      description = undefined;
    }
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: { ...this.issue, description }
    }));


  }

  cancel(): void {
    this.descriptionControl.patchValue(this.issue.description);
    this.changeEditMode();
  }


}
