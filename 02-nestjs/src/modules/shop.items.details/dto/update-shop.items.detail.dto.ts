import { PartialType } from '@nestjs/mapped-types';
import { CreateShopItemsDetailDto } from './create-shop.items.detail.dto';

export class UpdateShopItemsDetailDto extends PartialType(CreateShopItemsDetailDto) {}
