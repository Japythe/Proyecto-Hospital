import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { identity } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './Schema/Users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private UsersModule: Model<UsersDocument>,
  ) {}
 
  async create(createUserDto: CreateUserDto) {
    const UserCreated = await this.UsersModule.create(createUserDto);
    return UserCreated;
  }

  findAll() {
    return this.UsersModule.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
