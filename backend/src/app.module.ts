import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProjectsModule } from './projects/projects.module';
import { IssuesModule } from './issues/issues.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forRoot(
      'mongodb://localhost:30001/kanban-project-management',
    ),
    IssuesModule,
    UsersModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
