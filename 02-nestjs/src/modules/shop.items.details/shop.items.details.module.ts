import { Module } from '@nestjs/common';
import { ShopItemsDetailsService } from './shop.items.details.service';
import { ShopItemsDetailsController } from './shop.items.details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopItemDetail, ShopItemDetailSchema } from './schemas/shop.items.detail.schema';
import { ShopItemsModule } from '../shop.items/shop.items.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: ShopItemDetail.name, schema: ShopItemDetailSchema }]),
ShopItemsModule,],
  controllers: [ShopItemsDetailsController],
  providers: [ShopItemsDetailsService],
})
export class ShopItemsDetailsModule {}
