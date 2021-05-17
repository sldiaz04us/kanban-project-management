import { IssuePriority } from "@core/interfaces/issue";
import { IssuePriorityIcon } from "@core/interfaces/issue-priority-icon";
import { IssueTypeWithIcon } from "@core/interfaces/issue-type-icon";
import { IssueUtil } from "@core/utils/issue";

export class ProjectConst {
  static PrioritiesWithIcon: IssuePriorityIcon[] = [
    IssueUtil.getIssuePriorityIcon(IssuePriority.HIGHEST),
    IssueUtil.getIssuePriorityIcon(IssuePriority.HIGH),
    IssueUtil.getIssuePriorityIcon(IssuePriority.MEDIUM),
    IssueUtil.getIssuePriorityIcon(IssuePriority.LOW),
    IssueUtil.getIssuePriorityIcon(IssuePriority.LOWEST),
  ];

  static IssueTypesWithIcon: IssueTypeWithIcon[] = [
    new IssueTypeWithIcon('Bug'),
    new IssueTypeWithIcon('Story'),
    new IssueTypeWithIcon('Task'),
  ];
}
