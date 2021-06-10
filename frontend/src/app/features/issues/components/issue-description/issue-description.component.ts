import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Issue } from '@core/interfaces/issue';
import { IssuePageActions } from '@features/issues/state/actions';
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

  ops = QuillEditorUtil.getDefaultOps();
  defaultEditorOptions = QuillEditorUtil.getDefaultModuleOptions();

  constructor(private store: Store<AppState>) { }

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
    let description = this.descriptionControl.value;

    // Quill editor adds a new line (\n) always, even without content
    if (QuillEditorUtil.isContentEmpty(description)) {
      description = undefined;
    }
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: { ...this.issue, description }
    }));

    this.changeEditMode();
  }

  cancel(): void {
    this.descriptionControl.patchValue(this.issue.description);
    this.changeEditMode();
  }


}
