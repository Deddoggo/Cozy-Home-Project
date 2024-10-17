import { ShopItemDetail } from '@/modules/shop.items.details/schemas/shop.items.detail.schema';
import { ShopItem } from '@/modules/shop.items/schemas/shop.item.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema({ timestamps: true })
export class CartItem {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: ShopItem.name})
    shopItem: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: ShopItemDetail.name})
    shopItemDetail: mongoose.Schema.Types.ObjectId;

    @Prop()
    quantity: number;

}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
