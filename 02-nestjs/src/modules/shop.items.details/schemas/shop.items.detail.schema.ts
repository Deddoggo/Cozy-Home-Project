import { ShopItem } from '@/modules/shop.items/schemas/shop.item.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ShopItemDetailDocument = HydratedDocument<ShopItemDetail>;

@Schema({ timestamps: true })
export class ShopItemDetail {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ShopItem.name })
  shopItem: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  additionalPrice: number;

  @Prop()
  optionalDescription: string;

}

export const ShopItemDetailSchema = SchemaFactory.createForClass(ShopItemDetail);
