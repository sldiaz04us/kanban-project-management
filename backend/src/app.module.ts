import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectsModule } from './projects/projects.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost/kanban-project-management'),
    IssuesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
