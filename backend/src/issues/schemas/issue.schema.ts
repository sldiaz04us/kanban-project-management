import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IssuePriority } from '@kanban-project-management/issues/enums/issue-priority.enum';
import { IssueStatus } from '@kanban-project-management/issues/enums/issue-status.enum';
import { IssueType } from '@kanban-project-management/issues/enums/issue-type.enum';

export type IssueDocument = Issue & Document;

@Schema({ timestamps: true })
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
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
