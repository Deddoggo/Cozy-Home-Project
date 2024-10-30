import { IsNotEmpty, IsString, IsOptional, IsNumber, IsPositive } from "class-validator";

export class CreateShopItemsDetailDto {
  @IsNotEmpty()
  shopItem: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  additionalPrice: number;

  @IsOptional()
  @IsString()
  optionalDescription?: string;
}
