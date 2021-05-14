import { IssuePriority, IssuePriorityColors } from "./issue";

export class IssuePriorityIcon {
  icon: string;
  value: string;
  color: string;

  constructor(issuePriority: IssuePriority) {
    const higherPriorities = [IssuePriority.HIGH, IssuePriority.HIGHEST];
    this.value = issuePriority;
    this.icon = higherPriorities.includes(issuePriority) ? 'arrow-up' : 'arrow-down';
    this.color = IssuePriorityColors[issuePriority];
  }
}
