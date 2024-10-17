import { Module } from '@nestjs/common';
import { ShopItemsService } from './shop.items.service';
import { ShopItemsController } from './shop.items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopItem, ShopItemSchema } from './schemas/shop.item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ShopItem.name, schema: ShopItemSchema }])],
  controllers: [ShopItemsController],
  providers: [ShopItemsService],
})
export class ShopItemsModule {}
