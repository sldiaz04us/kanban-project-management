import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Issue } from '@core/interfaces/issue';
import { AppState } from '@core/interfaces/app.state';
import { IssuePageActions } from '@features/issues/state/actions';
import { setIssueEditing } from '@features/issues/state/actions/issue-page.actions';

@Component({
  selector: 'issue-title',
  templateUrl: './issue-title.component.html',
  styleUrls: ['./issue-title.component.scss']
})
export class IssueTitleComponent implements OnChanges {
  @Input() issue: Issue;
  titleControl: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (issueChange.previousValue !== issueChange.currentValue) {
      this.titleControl = new FormControl(this.issue.title);
    }
  }

  onFocus(): void {
    this.store.dispatch(setIssueEditing({ isEditing: true }));
  }

  onBlur(): void {
    this.store.dispatch(setIssueEditing({ isEditing: false }));

    if (this.titleControl.invalid) {
      return;
    }
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: { ...this.issue, title: this.titleControl.value }
    }));

  }

}
