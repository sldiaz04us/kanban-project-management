import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue, IssueDocument } from './schemas/issue.schema';
import { mongooseErrorHandler } from '@kanban-project-management/common/helpers/mongoose-error-handler';

@Injectable()
export class IssuesService {
  constructor(
    @InjectModel(Issue.name) private issueModel: Model<IssueDocument>,
  ) {}

  async create(createIssueDto: CreateIssueDto) {
    const createIssue = new this.issueModel(createIssueDto);

    try {
      const result = await createIssue.save();
      return result;
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }

  findAll() {
    return this.issueModel.find();
  }

  async findById(id: string) {
    const found = await this.issueModel.findById(id);
    if (!found) {
      throw new NotFoundException(`Issue with ID ${id} not found`);
    }
    return found;
  }

  async update(id: string, updateIssueDto: UpdateIssueDto) {
    let result: Issue;
    try {
      result = await this.issueModel
        .findOneAndUpdate({ _id: id }, updateIssueDto, {
          new: true,
        })
        .exec();
    } catch (error) {
      mongooseErrorHandler(error);
    }

    if (!result) {
      throw new NotFoundException(`Issue with ID ${id} not found`);
    }
    return result;
  }

  async remove(id: string) {
    const result = await this.issueModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Issue with ID ${id} not found`);
    }
  }
}
