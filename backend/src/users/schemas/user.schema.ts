import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true, lowercase: true, trim: true })
  email: string;

  @Prop()
  avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
