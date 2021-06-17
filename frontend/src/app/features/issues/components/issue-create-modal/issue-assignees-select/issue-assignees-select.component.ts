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
  @Input() assignees: User[];

  listOfSelectedValues: User[] = [];

  constructor() { }

  isSelected(user: User): boolean {
    return !!this.listOfSelectedValues.find(u => u.id === user.id);
  }

  onSelected(users: User[]): void {
    this.listOfSelectedValues = users;
  }

  nzFilterOption(inputValue: string, item: any): boolean {
    return item.nzValue.name.toLowerCase().match(inputValue.toLowerCase());
  }


}
