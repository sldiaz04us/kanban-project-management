import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { Issue, IssueType } from '@core/interfaces/issue';
import { IssueTypeWithIcon } from '@core/interfaces/issue-type-icon';
import { ProjectConst } from '@core/constants/project-const';
import { IssueUtil } from '@core/utils/issue';
import { AppState } from '@core/interfaces/app.state';
import { IssuePageActions } from '@features/issues/state/actions';

@Component({
  selector: 'issue-type',
  templateUrl: './issue-type.component.html',
  styleUrls: ['./issue-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueTypeComponent {
  @Input() issue: Issue;
  issueTypes: IssueTypeWithIcon[];

  constructor(private store: Store<AppState>) {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  get selectedIssueTypeIcon(): string {
    return IssueUtil.getIssueTypeIcon(this.issue.type);
  }

  updateIssue(issueType: IssueType): void {
    const issueUpdated: Issue = {
      ...this.issue,
      type: issueType,
    };
    this.store.dispatch(IssuePageActions.updateIssue({ issue: issueUpdated }));
  }

  isTypeSelected(type: IssueType): boolean {
    return this.issue.type === type;
  }
}
