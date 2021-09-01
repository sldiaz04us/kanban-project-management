import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, ClientSession } from 'mongoose';

import {
  Issue,
  IssueDocument,
} from '@kanban-project-management/features/issues/schemas/issue.schema';
import { issues } from './issues';

@Injectable()
export class IssueSeeder {
  constructor(
    @InjectModel(Issue.name) private issueModel: Model<IssueDocument>,
  ) {}

  async seed(session: ClientSession) {
    await this.issueModel.deleteMany({}, { session });
    // Use create method because "mongoose-sequence" plugin uses Hooks (middleware) "save"
    await this.issueModel.create(issues, { session });
  }
}
