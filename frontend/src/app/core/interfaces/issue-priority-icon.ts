import { IssueUtil } from "@core/utils/issue";
import { IssuePriority } from "./issue";

export class IssuePriorityIcon {
  value: IssuePriority;
  icon: string;

  constructor(issuePriority: IssuePriority) {
    this.value = issuePriority;
    this.icon = IssueUtil.getIssuePriorityIcon(issuePriority);
  }
}
