import { Category } from '@/modules/categories/schemas/category.schema';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDefined, IsPositive } from 'class-validator';

export class CreateShopItemDto {
  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
  
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  basePrice: number;

  @IsOptional()
  @IsString()
  image?: string;
}
