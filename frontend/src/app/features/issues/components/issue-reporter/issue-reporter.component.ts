import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Issue } from '@core/interfaces/issue';
import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-reporter',
  templateUrl: './issue-reporter.component.html',
  styleUrls: ['./issue-reporter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueReporterComponent {
  @Input() issue: Issue;
  @Input() assignees: User[];

  constructor(private store: Store<AppState>) { }

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
