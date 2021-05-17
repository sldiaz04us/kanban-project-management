import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '@core/interfaces/user';

@Component({
  selector: 'issue-reporter-select',
  templateUrl: './issue-reporter-select.component.html',
  styleUrls: ['./issue-reporter-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueReporterSelectComponent {
  @Input() form: FormGroup;
  @Input() users: User[];

  constructor() { }

  getUser(userId: string): User {
    return this.users.find(u => u.id === userId);
  }

}
