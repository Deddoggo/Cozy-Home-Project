import { Module } from '@nestjs/common';
import { ShopItemsService } from './shop.items.service';
import { ShopItemsController } from './shop.items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopItem, ShopItemSchema } from './schemas/shop.item.schema';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: ShopItem.name, schema: ShopItemSchema }]),
  CategoriesModule,],
  controllers: [ShopItemsController],
  providers: [ShopItemsService],
  exports: [MongooseModule]
})
export class ShopItemsModule {}
