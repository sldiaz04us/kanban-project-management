import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  User,
  UserSchema,
} from '@kanban-project-management/features/users/schemas/user.schema';
import { UserSeeder } from './user-seeder.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserSeeder],
  exports: [UserSeeder],
})
export class UserSeederModule {}
