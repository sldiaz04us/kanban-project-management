import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { Issue } from '@core/interfaces/issue';
import { IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-assignees',
  templateUrl: './issue-assignees.component.html',
  styleUrls: ['./issue-assignees.component.scss']
})
export class IssueAssigneesComponent implements OnInit {
  @Input() issue: Issue;
  @Input() assignees: User[];

  listOfSelectedValue: User[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.listOfSelectedValue = this.issue.userIds
      .map(userId => this.assignees.find(a => a.id === userId));
  }

  isSelected(user: User): boolean {
    return !!this.listOfSelectedValue.find(u => u.id === user.id);
  }

  onSelected(users: any): void {
    this.listOfSelectedValue = users;
    const userIds = this.listOfSelectedValue.map(u => u.id);
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: {
        ...this.issue,
        userIds
      }
    }));
  }

  nzFilterOption(inputValue: string, item: any): boolean {
    return item.nzValue.name.toLowerCase().match(inputValue.toLowerCase());
  }

}
