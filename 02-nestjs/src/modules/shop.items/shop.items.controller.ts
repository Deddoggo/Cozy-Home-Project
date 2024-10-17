import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopItemsService } from './shop.items.service';
import { CreateShopItemDto } from './dto/create-shop.item.dto';
import { UpdateShopItemDto } from './dto/update-shop.item.dto';

@Controller('shop.items')
export class ShopItemsController {
  constructor(private readonly shopItemsService: ShopItemsService) {}

  @Post()
  create(@Body() createShopItemDto: CreateShopItemDto) {
    return this.shopItemsService.create(createShopItemDto);
  }

  @Get()
  findAll() {
    return this.shopItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopItemDto: UpdateShopItemDto) {
    return this.shopItemsService.update(+id, updateShopItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopItemsService.remove(+id);
  }
}
