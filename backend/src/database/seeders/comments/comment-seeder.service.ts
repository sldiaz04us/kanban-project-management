import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, ClientSession } from 'mongoose';

import {
  Comment,
  CommentDocument,
} from '@kanban-project-management/features/comments/schemas/comment.schema';
import { comments } from './comments';

@Injectable()
export class CommentSeeder {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async seed(session: ClientSession) {
    await this.commentModel.deleteMany({}, { session });
    await this.commentModel.insertMany(comments, { session });
  }
}
