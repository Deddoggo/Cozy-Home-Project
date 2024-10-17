import { Injectable } from '@nestjs/common';
import { CreateShopItemDto } from './dto/create-shop.item.dto';
import { UpdateShopItemDto } from './dto/update-shop.item.dto';

@Injectable()
export class ShopItemsService {
  create(createShopItemDto: CreateShopItemDto) {
    return 'This action adds a new shopItem';
  }

  findAll() {
    return `This action returns all shopItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopItem`;
  }

  update(id: number, updateShopItemDto: UpdateShopItemDto) {
    return `This action updates a #${id} shopItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopItem`;
  }
}
