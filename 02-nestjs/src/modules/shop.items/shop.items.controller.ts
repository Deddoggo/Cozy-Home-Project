import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ShopItemsService } from './shop.items.service';
import { CreateShopItemDto } from './dto/create-shop.item.dto';
import { UpdateShopItemDto } from './dto/update-shop.item.dto';

@Controller('shop-items')  // Updated URL to be consistent
export class ShopItemsController {
  constructor(private readonly shopItemsService: ShopItemsService) {}

  @Post()
  create(@Body() createShopItemDto: CreateShopItemDto) {
    return this.shopItemsService.create(createShopItemDto);
  }

  @Get()
  async findAll(
    @Query() query: string,
    @Query("current") current: string,
    @Query("pageSize") pageSize: string,
  ) {
    return await this.shopItemsService.findAll(query, +current, +pageSize);  // Return all shop items
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.shopItemsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShopItemDto: UpdateShopItemDto) {
    return await this.shopItemsService.update(+id, updateShopItemDto);
  }

@Delete(':id')
async remove(@Param('id') id: string) {
  return await this.shopItemsService.remove(id); 
}
}
