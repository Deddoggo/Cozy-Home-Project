import { Module } from '@nestjs/common';
import { BlogsService } from '@/modules/blogs/blogs.service';
import { BlogsController } from '@/modules/blogs/blogs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from '@/modules/blogs/schemas/blog.schema';
import { UsersModule } from '@/modules/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  UsersModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
