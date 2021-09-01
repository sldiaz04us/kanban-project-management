import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectSeeder } from './project-seeder.service';
import {
  Project,
  ProjectSchema,
} from '@kanban-project-management/features/projects/schemas/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  providers: [ProjectSeeder],
  exports: [ProjectSeeder],
})
export class ProjectSeederModule {}
