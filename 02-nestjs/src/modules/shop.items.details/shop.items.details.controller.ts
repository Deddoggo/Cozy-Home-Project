import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ShopItemsDetailsService } from './shop.items.details.service';
import { CreateShopItemsDetailDto } from './dto/create-shop.items.detail.dto';
import { UpdateShopItemsDetailDto } from './dto/update-shop.items.detail.dto';

@Controller('shop-items-details')
export class ShopItemsDetailsController {
  constructor(private readonly shopItemsDetailsService: ShopItemsDetailsService) {}

  @Post()
  create(@Body() createShopItemsDetailDto: CreateShopItemsDetailDto) {
    return this.shopItemsDetailsService.create(createShopItemsDetailDto);
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
  findOne(@Param('id') id: string) {
    return this.shopItemsDetailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopItemsDetailDto: UpdateShopItemsDetailDto) {
    return this.shopItemsDetailsService.update(id, updateShopItemsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopItemsDetailsService.remove(id);
  }
}
