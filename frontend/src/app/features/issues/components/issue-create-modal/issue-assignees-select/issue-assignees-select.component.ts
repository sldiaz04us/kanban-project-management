import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '@core/interfaces/user';

@Component({
  selector: 'issue-assignees-select',
  templateUrl: './issue-assignees-select.component.html',
  styleUrls: ['./issue-assignees-select.component.scss']
})
export class IssueAssigneesSelectComponent {
  @Input() form: FormGroup;
  @Input() users: User[];
  listOfSelectedValue: string[] = [];

  constructor() { }

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }

  getUser(userId: string): User {
    return this.users.find(u => u.id === userId);
  }

  onSelected(userIds: string[]): void {
    this.listOfSelectedValue = userIds;
  }

}
