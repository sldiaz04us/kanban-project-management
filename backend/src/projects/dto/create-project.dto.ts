import { IsIn, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

import { ProjectCategory } from '@kanban-project-management/projects/project-category.enum';

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
  avatar: string;
}
