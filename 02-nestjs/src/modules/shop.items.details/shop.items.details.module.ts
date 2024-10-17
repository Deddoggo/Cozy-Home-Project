import { Module } from '@nestjs/common';
import { ShopItemsDetailsService } from './shop.items.details.service';
import { ShopItemsDetailsController } from './shop.items.details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopItemDetail, ShopItemDetailSchema } from './schemas/shop.items.detail.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ShopItemDetail.name, schema: ShopItemDetailSchema }])],
  controllers: [ShopItemsDetailsController],
  providers: [ShopItemsDetailsService],
})
export class ShopItemsDetailsModule {}
