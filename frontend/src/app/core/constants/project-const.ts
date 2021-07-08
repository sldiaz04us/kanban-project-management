import { IssuePriority } from "@core/interfaces/issue";
import { IssuePriorityIcon } from "@core/interfaces/issue-priority-icon";
import { IssueTypeWithIcon } from "@core/interfaces/issue-type-icon";
import { ProjectCategory } from "@core/interfaces/project";

export class ProjectConst {
  static PrioritiesWithIcon: IssuePriorityIcon[] = [
    new IssuePriorityIcon(IssuePriority.HIGHEST),
    new IssuePriorityIcon(IssuePriority.HIGH),
    new IssuePriorityIcon(IssuePriority.MEDIUM),
    new IssuePriorityIcon(IssuePriority.LOW),
    new IssuePriorityIcon(IssuePriority.LOWEST),
  ];

  static IssueTypesWithIcon: IssueTypeWithIcon[] = [
    new IssueTypeWithIcon('Bug'),
    new IssueTypeWithIcon('Story'),
    new IssueTypeWithIcon('Task'),
  ];

  static ProjectCategories: ProjectCategory[] = ['Software', 'Marketing', 'Business']
}
