import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IssuePriority } from '@kanban-project-management/features/issues/enums/issue-priority.enum';
import { IssueStatus } from '@kanban-project-management/features/issues/enums/issue-status.enum';
import { IssueType } from '@kanban-project-management/features/issues/enums/issue-type.enum';
import { User } from '@kanban-project-management/features/users/schemas/user.schema';

export type IssueDocument = Issue & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class Issue {
  @Prop({ required: true, minlength: 5 })
  title: string;

  @Prop({ enum: IssueType, default: IssueType.STORY })
  type: string;

  @Prop({ enum: IssueStatus, default: IssueStatus.BACKLOG })
  status: string;

  @Prop({ enum: IssuePriority, default: IssuePriority.MEDIUM })
  priority: string;

  @Prop({ default: 0 })
  listPosition: number;

  @Prop({ type: Object })
  description: any;

  @Prop({ required: true })
  projectId: string;

  @Prop({ required: true })
  projectKey: string;

  @Prop({ required: true, type: Object })
  reporter: User;

  @Prop()
  assignees: User[];
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
