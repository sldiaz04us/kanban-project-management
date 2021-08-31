import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';

import { Connection, ClientSession } from 'mongoose';

import { UserSeeder } from './users/user-seeder.service';
import { ProjectSeeder } from './projects/project-seeder.service';
import { IssueSeeder } from './issues/issue-seeder.service';
import { CommentSeeder } from './comments/comment-seeder.service';

@Injectable()
export class Seeder {
  private readonly logger = new Logger(Seeder.name);

  constructor(
    @InjectConnection() private connection: Connection,
    private readonly userSeeder: UserSeeder,
    private readonly projectSeeder: ProjectSeeder,
    private readonly issueSeeder: IssueSeeder,
    private readonly commentSeeder: CommentSeeder,
  ) {}

  async seedDatabase() {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      await this.connection.collections['counters'].deleteMany({}); // collection created by "mongoose-sequence" plugin
      await this.seedCollections(session);

      await session
        .commitTransaction()
        .then(() => this.logger.verbose('Database seeded successfully'))
        .catch((error) =>
          this.logger.error('Failed to seed the database', error),
        );
    } catch (error) {
      this.logger.error('Failed to seed the database', error);
      await session.abortTransaction();
    } finally {
      session.endSession();
    }
  }

  private async seedCollections(session: ClientSession) {
    await this.userSeeder.seed(session);
    await this.projectSeeder.seed(session);
    await this.issueSeeder.seed(session);
    await this.commentSeeder.seed(session);
  }
}
