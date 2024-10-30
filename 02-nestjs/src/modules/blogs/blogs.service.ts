import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateBlogDto } from '@/modules/blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '@/modules/blogs/dto/update-blog.dto';
import { Blog, BlogDocument } from '@/modules/blogs/schemas/blog.schema';
import { User, UserDocument } from '@/modules/users/schemas/user.schema';
import aqp from 'api-query-params';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) private blogModel: Model<BlogDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  // Check if the user ID is valid
  async isValidUserId(userId: string): Promise<boolean> {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return false;
    }
    const userExists = await this.userModel.exists({ _id: userId });
    return !!userExists;
  }

  // Create a new blog
  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const userExists = await this.isValidUserId(createBlogDto.user);
    if (!userExists) {
      throw new NotFoundException(
        `User with ID ${createBlogDto.user} not found`,
      );
    }

    const newBlog = new this.blogModel(createBlogDto);
    return newBlog.save();
  }

  // Retrieve all blogs with pagination and optional filtering by author
  async findAll(query: string, current: number, pageSize: number) {
    const { filter, limit, sort } = aqp(query);

    // Assuming query should search title/description
    if (filter.query) {
      filter.$or = [
        { title: { $regex: `.*${filter.query}.*`, $options: 'i' } },
        { content: { $regex: `.*${filter.query}.*`, $options: 'i' } },
        { tags: { $regex: `.*${filter.query}.*`, $options: 'i' } },
      ];
      delete filter.query; // Remove query after it's processed
    }

    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;

    const totalItems = await this.blogModel.find(filter).countDocuments();
    const totalPages = Math.ceil(totalItems / pageSize);

    const skip = (current - 1) * pageSize;
    const results = await this.blogModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .sort(sort as any);

    return { results, totalItems, totalPages };
  }

  // Retrieve a single blog by ID
  async findOne(id: string): Promise<Blog> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid blog ID format');
    }
    const blog = await this.blogModel.findById(id).exec();
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    return blog;
  }

  // Update a blog
  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    if (updateBlogDto.user && !(await this.isValidUserId(updateBlogDto.user))) {
      throw new BadRequestException(`Invalid author ID: ${updateBlogDto.user}`);
    }

    const updatedBlog = await this.blogModel
      .findByIdAndUpdate(id, updateBlogDto, { new: true })
      .exec();
    if (!updatedBlog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    return updatedBlog;
  }

  // Delete a blog
  async remove(id: string): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid blog ID format');
    }
    const result = await this.blogModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
  }
}
