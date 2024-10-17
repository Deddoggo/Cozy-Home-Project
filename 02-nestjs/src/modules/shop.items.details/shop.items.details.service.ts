import { Injectable } from '@nestjs/common';
import { CreateShopItemsDetailDto } from './dto/create-shop.items.detail.dto';
import { UpdateShopItemsDetailDto } from './dto/update-shop.items.detail.dto';

@Injectable()
export class ShopItemsDetailsService {
  create(createShopItemsDetailDto: CreateShopItemsDetailDto) {
    return 'This action adds a new shopItemsDetail';
  }

  findAll() {
    return `This action returns all shopItemsDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopItemsDetail`;
  }

  update(id: number, updateShopItemsDetailDto: UpdateShopItemsDetailDto) {
    return `This action updates a #${id} shopItemsDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopItemsDetail`;
  }
}
