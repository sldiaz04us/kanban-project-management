import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './schemas/project.schema';
import { mongooseErrorHandler } from '@kanban-project-management/common/helpers/mongoose-error-handler';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
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

  async findAll(): Promise<Project[]> {
    return this.projectModel.find();
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
    const result = await this.projectModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
  }
}
