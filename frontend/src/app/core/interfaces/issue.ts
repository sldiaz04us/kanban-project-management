export type IssueType = 'Story' | 'Task' | 'Bug';

export enum IssueStatus {
  BACKLOG = 'Backlog',
  IN_PROGRESS = 'InProgress',
  IN_REVIEW = 'InReview',
  DONE = 'Done',
}
export const IssueStatusDisplay = {
  [IssueStatus.BACKLOG]: 'Backlog',
  [IssueStatus.IN_PROGRESS]: 'In progress',
  [IssueStatus.IN_REVIEW]: 'In review',
  [IssueStatus.DONE]: 'Done',
}

export enum IssuePriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest'
}
export const IssuePriorityColors = {
  [IssuePriority.HIGHEST]: '#CD1317',
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
  [IssuePriority.LOWEST]: '#57A55A'
};

export interface Issue {
  id: string;
  title: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  listPosition: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  reporterId: string;
  userIds: string[];
  projectId: string;
}

