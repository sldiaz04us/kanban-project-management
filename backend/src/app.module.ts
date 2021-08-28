import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ProjectsModule } from './projects/projects.module';
import { IssuesModule } from './issues/issues.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { configValidationSchema } from './config/config.schema';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { uri: configService.get('MONGODB_URI') };
      },
    }),
    ProjectsModule,
    IssuesModule,
    UsersModule,
    CommentsModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
