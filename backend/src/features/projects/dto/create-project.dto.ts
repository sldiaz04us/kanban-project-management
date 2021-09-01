import { IsIn, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

import { ProjectCategory } from '@kanban-project-management/features/projects/project-category.enum';
import { User } from '@kanban-project-management/features/users/schemas/user.schema';

export class CreateProjectDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsNotEmpty()
  @MinLength(2)
  key: string;

  @IsOptional()
  description: Record<string, unknown>;

  @IsOptional()
  url: string;

  @IsOptional()
  @IsIn([...Object.values(ProjectCategory)])
  category: string;

  @IsOptional()
  avatarUrl: string;

  @IsNotEmpty()
  leader: User;

  @IsOptional()
  assignees: User[];
}
