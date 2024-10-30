import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BlogsService } from '@/modules/blogs/blogs.service';
import { CreateBlogDto } from '@/modules/blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '@/modules/blogs/dto/update-blog.dto';
import { Blog } from '@/modules/blogs/schemas/blog.schema';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  // Create a new blog
  @Post()
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsService.create(createBlogDto);
  }

  // Get all blogs
  @Get()
  async findAll(
    @Query() query: string,
    @Query("current") current: string,
    @Query("pageSize") pageSize: string,
  ) {
    return await this.blogsService.findAll(query, +current, +pageSize);  // Return all shop items
  }

  // Get a single blog by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Blog> {
    return this.blogsService.findOne(id);
  }

  // Update a blog
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto
  ): Promise<Blog> {
    return this.blogsService.update(id, updateBlogDto);
  }

  // Delete a blog
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.blogsService.remove(id);
  }
}
