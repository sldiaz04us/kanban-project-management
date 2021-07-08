import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Issue, IssuePriority } from '@core/interfaces/issue';
import { IssuePriorityIcon } from '@core/interfaces/issue-priority-icon';
import { IssueUtil } from '@core/utils/issue';
import { ProjectConst } from '@core/constants/project-const';
import { AppState } from '@core/interfaces/app.state';
import { IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-priority',
  templateUrl: './issue-priority.component.html',
  styleUrls: ['./issue-priority.component.scss']
})
export class IssuePriorityComponent implements OnInit, OnChanges {
  @Input() issue: Issue;

  selectedPriority: IssuePriority;
  priorities: IssuePriorityIcon[];

  constructor(private store: Store<AppState>) { }

  get selectedPriorityIcon(): string {
    return IssueUtil.getIssuePriorityIcon(this.selectedPriority);
  }

  ngOnInit(): void {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  ngOnChanges(): void {
    this.selectedPriority = this.issue?.priority;
  }

  isPrioritySelected(priority: IssuePriority): boolean {
    return priority === this.selectedPriority;
  }

  updateIssue(priority: IssuePriority): void {
    this.selectedPriority = priority;
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: {
        ...this.issue,
        priority
      }
    }));
  }

}
