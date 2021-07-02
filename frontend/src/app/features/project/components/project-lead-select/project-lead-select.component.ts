import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '@core/interfaces/user';

@Component({
  selector: 'project-lead-select',
  templateUrl: './project-lead-select.component.html',
  styleUrls: ['./project-lead-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectLeadSelectComponent {
  @Input() form: FormGroup;
  @Input() assignees: User[];

  constructor() { }

  compareFn = (o1: User, o2: User) => (o1 && o2 ? o1.id === o2.id : o1 === o2);

  nzFilterOption(inputValue: string, item: any): boolean {
    return item.nzValue.name.toLowerCase().match(inputValue.toLowerCase());
  }

}
