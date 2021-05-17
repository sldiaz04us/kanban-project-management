import { IssueUtil } from "@core/utils/issue";
import { IssueType } from "./issue";

export class IssueTypeWithIcon {
  value: string;
  icon: string;

  constructor(issueType: IssueType) {
    this.value = issueType;
    this.icon = IssueUtil.getIssueTypeIcon(issueType);
  }
}
