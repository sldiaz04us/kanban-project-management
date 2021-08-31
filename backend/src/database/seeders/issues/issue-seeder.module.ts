import { Module } from '@nestjs/common';

import { IssueSeeder } from './issue-seeder.service';
import { MongoFeatureProviderModule } from '@kanban-project-management/providers/database/mongo/feature-provider.module';

@Module({
  imports: [MongoFeatureProviderModule],
  providers: [IssueSeeder],
  exports: [IssueSeeder],
})
export class IssueSeederModule {}
