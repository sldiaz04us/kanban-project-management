import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { User } from '@core/interfaces/user';
import { AppState } from '@core/interfaces/app.state';
import { Issue } from '@core/interfaces/issue';
import { IssuePageActions } from '@features/issues/state/actions';
import { setIssueEditing } from '@features/issues/state/actions/issue-page.actions';

@Component({
  selector: 'issue-assignees',
  templateUrl: './issue-assignees.component.html',
  styleUrls: ['./issue-assignees.component.scss']
})
export class IssueAssigneesComponent implements OnInit {
  @Input() issue: Issue;
  @Input() assignees: User[];

  listOfSelectedValues: User[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.listOfSelectedValues = this.issue.assignees;
  }

  isSelected(user: User): boolean {
    return !!this.listOfSelectedValues.find(u => u.id === user.id);
  }

  onSelected(users: any): void {
    this.listOfSelectedValues = users;
    this.store.dispatch(IssuePageActions.updateIssue({
      issue: {
        ...this.issue,
        assignees: users
      }
    }));
  }

  nzFilterOption(inputValue: string, item: any): boolean {
    return item.nzValue.name.toLowerCase().match(inputValue.toLowerCase());
  }

  compareFn = (o1: User, o2: User) => (o1 && o2 ? o1.id === o2.id : o1 === o2);

  onFocus(): void {
    this.store.dispatch(setIssueEditing({ isEditing: true }));
  }

  onBlur(): void {
    this.store.dispatch(setIssueEditing({ isEditing: false }));
  }

}
