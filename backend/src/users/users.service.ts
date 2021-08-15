import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { mongooseErrorHandler } from '@kanban-project-management/common/helpers/mongoose-error-handler';
import { GetUserFilterDto } from './dto/get-user-filter.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);

    try {
      const result = await createUser.save();
      return result;
    } catch (error) {
      mongooseErrorHandler(error);
    }
  }

  findAll(filterDto: GetUserFilterDto) {
    const { name } = filterDto;
    const query = this.userModel.find();

    if (name) {
      query.where('name', { $regex: '.*' + name + '.*', $options: 'i' });
    }
    return query.exec();
  }

  async findOne(id: string) {
    const found = await this.userModel.findById(id);
    if (!found) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return found;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let result: User;
    try {
      result = await this.userModel
        .findOneAndUpdate({ _id: id }, updateUserDto, {
          new: true,
        })
        .exec();
    } catch (error) {
      mongooseErrorHandler(error);
    }

    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return result;
  }

  async remove(id: string) {
    const result = await this.userModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
