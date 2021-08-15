import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { ProjectCategory } from '@kanban-project-management/projects/project-category.enum';
import { User } from '@kanban-project-management/users/schemas/user.schema';

export type ProjectDocument = Project & Document;
@Schema({ timestamps: true })
export class Project {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ unique: true, required: true })
  key: string;

  @Prop({ type: Object })
  description: any;

  @Prop()
  url: string;

  @Prop({ enum: ProjectCategory, default: ProjectCategory.Software })
  category: string;

  @Prop()
  avatarUrl: string;

  @Prop({ required: true, type: Object })
  leader: User;

  @Prop()
  assignees: User[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
