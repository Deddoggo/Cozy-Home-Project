import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopItemsDetailsService } from './shop.items.details.service';
import { CreateShopItemsDetailDto } from './dto/create-shop.items.detail.dto';
import { UpdateShopItemsDetailDto } from './dto/update-shop.items.detail.dto';

@Controller('shop.items.details')
export class ShopItemsDetailsController {
  constructor(private readonly shopItemsDetailsService: ShopItemsDetailsService) {}

  @Post()
  create(@Body() createShopItemsDetailDto: CreateShopItemsDetailDto) {
    return this.shopItemsDetailsService.create(createShopItemsDetailDto);
  }

  @Get()
  findAll() {
    return this.shopItemsDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopItemsDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopItemsDetailDto: UpdateShopItemsDetailDto) {
    return this.shopItemsDetailsService.update(+id, updateShopItemsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopItemsDetailsService.remove(+id);
  }
}
