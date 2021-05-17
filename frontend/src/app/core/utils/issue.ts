import { IssuePriorityIcon } from '@core/interfaces/issue-priority-icon';
import { IssuePriority, IssueType } from '../interfaces/issue';

export class IssueUtil {
  static getIssueTypeIcon(issueType: IssueType): string {
    return issueType.toLocaleLowerCase();
  }

  static getIssuePriorityIcon(issuePriority: IssuePriority): IssuePriorityIcon {
    return new IssuePriorityIcon(issuePriority);
  }

  static getRandomId(): string {
    return `${Math.ceil(Math.random() * 10000)}`;
  }
}
