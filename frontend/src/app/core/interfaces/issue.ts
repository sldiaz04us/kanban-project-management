import { User } from './user';

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
};

export enum IssuePriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest',
}
export interface Issue {
  id: string;
  title: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  key: number;
  listPosition: number;
  description: Object;
  createdAt: string;
  updatedAt: string;
  reporter: User;
  assignees: User[];
  projectId: string;
  projectKey: string;
}
