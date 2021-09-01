import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  Comment,
  CommentSchema,
} from '@kanban-project-management/features/comments/schemas/comment.schema';
import { CommentSeeder } from './comment-seeder.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  providers: [CommentSeeder],
  exports: [CommentSeeder],
})
export class CommentSeederModule {}
