import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { take } from 'rxjs/operators';

import { Issue, IssueStatus, IssueStatusDisplay } from '@core/interfaces/issue';
import { AppState } from '@core/interfaces/app.state';
import { IssuePageActions } from '@features/issues/state/actions';
import { getIssuesCountByStatus } from '@features/issues/state/selectors/issue.selectors';

@Component({
  selector: 'issue-status',
  templateUrl: './issue-status.component.html',
  styleUrls: ['./issue-status.component.scss']
})
export class IssueStatusComponent implements OnInit {
  @Input() issue: Issue;

  statusFeedback = {
    [IssueStatus.BACKLOG]: 'btn-secondary',
    [IssueStatus.IN_PROGRESS]: 'btn-secondary',
    [IssueStatus.IN_REVIEW]: 'btn-primary',
    [IssueStatus.DONE]: 'btn-success'
  }

  issueStatuses: IssueStatusValueLabel[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.issueStatuses = [
      new IssueStatusValueLabel(IssueStatus.BACKLOG),
      new IssueStatusValueLabel(IssueStatus.IN_PROGRESS),
      new IssueStatusValueLabel(IssueStatus.IN_REVIEW),
      new IssueStatusValueLabel(IssueStatus.DONE)
    ];
  }

  updateIssue(status: IssueStatus) {
    this.store.select(getIssuesCountByStatus, { status })
      .pipe(take(1))
      .subscribe(issueCount => {
        this.store.dispatch(IssuePageActions.updateIssue({
          issue: {
            ...this.issue,
            status,
            listPosition: issueCount
          }
        }));
      });
  }

  isStatusSelected(status: IssueStatus) {
    return this.issue.status === status;
  }

}

class IssueStatusValueLabel {
  value: IssueStatus;
  label: string;
  constructor(issueStatus: IssueStatus) {
    this.value = issueStatus;
    this.label = IssueStatusDisplay[issueStatus];
  }
}
