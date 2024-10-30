// create-blog.dto.ts
import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  user: string;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString({ each: true })
  tags?: string;
}
