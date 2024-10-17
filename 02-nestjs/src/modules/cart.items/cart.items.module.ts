import { Module } from '@nestjs/common';
import { CartItemsService } from './cart.items.service';
import { CartItemsController } from './cart.items.controller';
import { CartItem, CartItemSchema } from './schemas/cart.item.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: CartItem.name, schema: CartItemSchema }])],
  controllers: [CartItemsController],
  providers: [CartItemsService],
})
export class CartItemsModule {}
