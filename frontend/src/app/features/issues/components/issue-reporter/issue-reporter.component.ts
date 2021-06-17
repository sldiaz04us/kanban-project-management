import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Store } from '@ngrx/store';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-reporter',
  templateUrl: './issue-reporter.component.html',
  styleUrls: ['./issue-reporter.component.scss']
})
export class IssueReporterComponent implements OnChanges {
  @Input() issue: Issue;
  @Input() assignees: User[];
  reporter: User;

  constructor(private store: Store<AppState>) { }

  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (this.assignees && issueChange.currentValue !== issueChange.previousValue) {
      this.reporter = this.assignees.find(u => u.id === this.issue.reporter.id)
    }
  }

  isUserSelected(user: User): boolean {
    return this.issue.reporter.id === user.id;
  }

  updateIssue(user: User): void {
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: {
        ...this.issue,
        reporter: user
      }
    }));
  }

}
