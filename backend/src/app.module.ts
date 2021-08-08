import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost/kanban-project-management'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
