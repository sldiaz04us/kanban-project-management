import { IsNotEmpty } from 'class-validator';

import { User } from '@kanban-project-management/features/users/schemas/user.schema';

export class CreateCommentDto {
  @IsNotEmpty()
  content: Record<string, unknown>;

  @IsNotEmpty()
  isEdited: boolean;

  @IsNotEmpty()
  issueId: string;

  @IsNotEmpty()
  author: User;
}
