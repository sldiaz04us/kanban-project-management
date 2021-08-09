import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { IssueType } from '@kanban-project-management/issues/enums/issue-type.enum';
import { IssueStatus } from '@kanban-project-management/issues/enums/issue-status.enum';
import { IssuePriority } from '@kanban-project-management/issues/enums/issue-priority.enum';

export class CreateIssueDto {
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsOptional()
  @IsIn([...Object.values(IssueType)])
  type: string;

  @IsOptional()
  @IsIn([...Object.values(IssueStatus)])
  status: string;

  @IsOptional()
  @IsIn([...Object.values(IssuePriority)])
  priority: string;

  @IsOptional()
  listPosition: number;

  @IsOptional()
  description: Record<string, unknown>;

  @IsNotEmpty()
  @IsString()
  projectId: string;
}
