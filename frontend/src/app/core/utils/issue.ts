import { IssuePriority, IssueType } from '../interfaces/issue';

export class IssueUtil {
  static getIssueTypeIcon(issueType: IssueType): string {
    return issueType.toLocaleLowerCase();
  }

  static getIssuePriorityIcon(issuePriority: IssuePriority): string {
    return issuePriority.toLocaleLowerCase();
  }

  static getRandomId(): string {
    return `${Math.ceil(Math.random() * 10000)}`;
  }
}
