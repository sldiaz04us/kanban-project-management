import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProjectConst } from '@core/constants/project-const';
import { IssuePriority } from '@core/interfaces/issue';
import { IssuePriorityIcon } from '@core/interfaces/issue-priority-icon';
import { IssueUtil } from '@core/utils/issue';

@Component({
  selector: 'issue-priority-select',
  templateUrl: './issue-priority-select.component.html',
  styleUrls: ['./issue-priority-select.component.scss']
})
export class IssuePrioritySelectComponent {
  @Input() form: FormGroup;
  priorities: IssuePriorityIcon[];

  constructor() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  getPriorityIcon(priority: IssuePriority) {
    return IssueUtil.getIssuePriorityIcon(priority);
  }

}
