import { Module } from '@nestjs/common';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';

import { Connection } from 'mongoose';

import {
  Issue,
  IssueSchema,
} from '@kanban-project-management/features/issues/schemas/issue.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Issue.name,
        useFactory: async (connection: Connection) => {
          const schema = IssueSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const AutoIncrementFactory = require('mongoose-sequence');
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, {
            id: 'project_issues_seq',
            inc_field: 'key',
            reference_fields: ['projectId'],
          });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongoFeatureProviderModule {}
