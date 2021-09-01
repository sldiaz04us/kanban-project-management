import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ClientSession, Model } from 'mongoose';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './schemas/project.schema';
import { mongooseErrorHandler } from '@kanban-project-management/common/helpers/mongoose-error-handler';
import { IssuesService } from '@kanban-project-management/features/issues/issues.service';
import { GetProjectFilterDto } from './dto/get-project-filter.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    private readonly issuesService: IssuesService,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createProject = new this.projectModel(createProjectDto);

    try {
      const result = await createProject.save();
      return result;
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }

  async findAll(filterDto: GetProjectFilterDto) {
    const { name, key } = filterDto;
    const query = this.projectModel.find();

    if (name) {
      query.where('name', { $regex: '^' + name + '$', $options: 'i' });
    }

    if (key) {
      query.where('key', { $regex: '^' + key + '$', $options: 'i' });
    }
    return query.exec();
  }

  async findById(id: string) {
    const found = await this.projectModel.findById(id);
    if (!found) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return found;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    let result: Project;
    try {
      result = await this.projectModel
        .findOneAndUpdate({ _id: id }, updateProjectDto, {
          new: true,
        })
        .exec();
    } catch (error) {
      mongooseErrorHandler(error);
    }
    if (!result) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return result;
  }

  async remove(id: string): Promise<void> {
    const session: ClientSession = await this.projectModel.startSession();
    session.startTransaction();

    try {
      const result = await this.projectModel.deleteOne(
        { _id: id },
        { session },
      );
      if (result.deletedCount === 0) {
        throw new NotFoundException(`Project with ID ${id} not found`);
      }

      await this.issuesService.deleteIssuesByProjectId(id, session);
      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
