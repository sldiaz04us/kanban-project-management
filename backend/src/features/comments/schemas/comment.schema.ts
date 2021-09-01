import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { User } from '@kanban-project-management/features/users/schemas/user.schema';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class Comment {
  @Prop({ required: true, type: Object })
  content: any;

  @Prop({ required: true, default: false })
  isEdited: boolean;

  @Prop({ required: true })
  issueId: string;

  @Prop({ required: true, type: Object })
  author: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
