import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProjectsModule } from './projects/projects.module';
import { IssuesModule } from './issues/issues.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { configValidationSchema } from './config/app/config.schema';
import { HealthController } from './health/health.controller';
import { MongoRootProviderModule } from '@kanban-project-management/providers/database/mongo/root-provider.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
      cache: true,
    }),
    MongoRootProviderModule,
    ProjectsModule,
    IssuesModule,
    UsersModule,
    CommentsModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
