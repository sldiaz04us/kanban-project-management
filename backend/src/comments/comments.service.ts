import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ClientSession, Model } from 'mongoose';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { mongooseErrorHandler } from '@kanban-project-management/common/helpers/mongoose-error-handler';
import { GetCommentFilterDto } from './dto/get-comment-filter.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const createComment = new this.commentModel(createCommentDto);

    try {
      return await createComment.save();
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }

  findAll(filterDto: GetCommentFilterDto) {
    const { issueId } = filterDto;
    const query = this.commentModel.find();

    if (issueId) {
      query.where('issueId', issueId);
    }
    return query.exec();
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    let result: Comment;
    try {
      result = await this.commentModel
        .findOneAndUpdate({ _id: id }, updateCommentDto, {
          new: true,
        })
        .exec();
    } catch (error) {
      mongooseErrorHandler(error);
    }

    if (!result) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return result;
  }

  async remove(id: string) {
    const result = await this.commentModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
  }

  async deleteCommentsByIssueId(issueId: string, session: ClientSession) {
    try {
      const result = await this.commentModel.deleteMany(
        { issueId },
        { session },
      );

      if (result.ok !== 1) {
        throw new InternalServerErrorException(
          `Error to delete the comments associated to the Issue with ID ${issueId}`,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteCommentsByIssueIds(issueIds: string[], session: ClientSession) {
    try {
      const result = await this.commentModel.deleteMany(
        {
          issueId: { $in: issueIds },
        },
        { session },
      );

      if (result.ok !== 1) {
        throw new InternalServerErrorException(
          `Error to delete the comments associated to the issues of the Project`,
        );
      }
    } catch (error) {
      throw error;
    }
  }
}
