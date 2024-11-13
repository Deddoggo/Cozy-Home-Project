import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ShopItemsDetailsService } from './shop.items.details.service';
import { CreateShopItemsDetailDto } from './dto/create-shop.items.detail.dto';
import { UpdateShopItemsDetailDto } from './dto/update-shop.items.detail.dto';

@Controller('shop-items-details')
export class ShopItemsDetailsController {
  constructor(private readonly shopItemsDetailsService: ShopItemsDetailsService) {}

  @Post()
  async create(@Body() createShopItemsDetailDto: CreateShopItemsDetailDto) {
    return await this.shopItemsDetailsService.create(createShopItemsDetailDto);
  }

  @Get()
  async findAll(
    @Query() query: string,
    @Query("current") current: string,
    @Query("pageSize") pageSize: string,
  ) {
    return await this.shopItemsDetailsService.findAll(query, +current, +pageSize);  // Return all shop items
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.shopItemsDetailsService.findOne(id);
  }

  @Get('shop-item/:shopItemId')
  async findByShopItem(@Param('shopItemId') shopItemId: string) {
    return await this.shopItemsDetailsService.findByShopItem(shopItemId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShopItemsDetailDto: UpdateShopItemsDetailDto) {
    return await this.shopItemsDetailsService.update(id, updateShopItemsDetailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.shopItemsDetailsService.remove(id);
  }
}
