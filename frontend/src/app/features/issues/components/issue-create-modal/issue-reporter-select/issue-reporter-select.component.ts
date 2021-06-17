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
  @Input() assignees: User[];

  constructor() { }

  compareFn = (o1: User, o2: User) => (o1 && o2 ? o1.id === o2.id : o1 === o2);

}
