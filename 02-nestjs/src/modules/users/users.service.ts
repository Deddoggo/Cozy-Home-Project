import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { hashPasswordHelper } from '@/helpers/util';
import aqp from 'api-query-params';
import e from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  isEmailExist = async (email: string) => {
    const user = await this.userModel.exists({ email });
    if (user) {
      return true;
    }
    return false;
  };

  async create(createUserDto: CreateUserDto) {
    const { name, email, password, phone, address, image } = createUserDto;

    //check if email already exist
    const isEmailExist = await this.isEmailExist(email);
    if (isEmailExist) {
      throw new BadRequestException(
        `Email ${email} already exist. Please choose another email`,
      );
    }
    //hash password
    const hashedPassword = await hashPasswordHelper(password);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      image,
    });
    return {
      _id: user._id,
    };
  }

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, limit, sort } = aqp(query);

    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) {
      current = 1;
    }
    if (!pageSize) {
      pageSize = 10;
    }

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * pageSize;

    const results = await this.userModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .select('-password')
      .sort(sort as any);

    return { results, totalPages };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
  }

  async remove(_id: string) {
    // check id
    if (mongoose.isValidObjectId(_id)) {
      //delete
      return this.userModel.deleteOne({ _id });
    } else {
      throw new BadRequestException(`Invalid id: ${_id}`);
    }
  }
}
