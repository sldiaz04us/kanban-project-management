import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, ClientSession } from 'mongoose';

import {
  Project,
  ProjectDocument,
} from '@kanban-project-management/features/projects/schemas/project.schema';
import { projects } from './projects';

@Injectable()
export class ProjectSeeder {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async seed(session: ClientSession) {
    await this.projectModel.deleteMany({}, { session });
    await this.projectModel.insertMany(projects, { session });
  }
}
