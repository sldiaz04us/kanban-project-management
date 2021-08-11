import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectsModule } from './projects/projects.module';
import { IssuesModule } from './issues/issues.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost/kanban-project-management'),
    IssuesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
