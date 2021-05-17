import { FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProjectConst } from '@core/constants/project-const';
import { IssueType } from '@core/interfaces/issue';
import { IssueTypeWithIcon } from '@core/interfaces/issue-type-icon';
import { IssueUtil } from '@core/utils/issue';

@Component({
  selector: 'issue-type-select',
  templateUrl: './issue-type-select.component.html',
  styleUrls: ['./issue-type-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueTypeSelectComponent {
  @Input() form: FormGroup;
  issueTypes: IssueTypeWithIcon[];

  constructor() {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  getIssueTypeIcon(issueType: IssueType) {
    return IssueUtil.getIssueTypeIcon(issueType);
  }

}
