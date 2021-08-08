import { IsIn, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

import { ProjectCategory } from '@kanban-project-management/projects/project-category.enum';

export class CreateProjectDto {
  @IsNotEmpty()
  @MinLength(5)
  readonly name: string;

  @IsNotEmpty()
  @MinLength(2)
  readonly key: string;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly url: string;

  @IsOptional()
  @IsIn([Object.values(ProjectCategory)])
  readonly category: string;

  @IsOptional()
  readonly avatar: string;
}
