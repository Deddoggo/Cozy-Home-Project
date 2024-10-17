import { Module } from '@nestjs/common';
import { ShopItemsDetailsService } from './shop.items.details.service';
import { ShopItemsDetailsController } from './shop.items.details.controller';

@Module({
  controllers: [ShopItemsDetailsController],
  providers: [ShopItemsDetailsService],
})
export class ShopItemsDetailsModule {}
