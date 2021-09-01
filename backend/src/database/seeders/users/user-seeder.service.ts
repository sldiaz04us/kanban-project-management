import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, ClientSession } from 'mongoose';

import {
  User,
  UserDocument,
} from '@kanban-project-management/features/users/schemas/user.schema';
import { users } from './users';

@Injectable()
export class UserSeeder {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async seed(session: ClientSession) {
    await this.userModel.deleteMany({}, { session });
    await this.userModel.insertMany(users, { session });
  }
}
