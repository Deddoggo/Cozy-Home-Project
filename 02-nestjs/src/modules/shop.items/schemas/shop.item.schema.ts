import { Category } from "@/modules/categories/schemas/category.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ShopItemDocument = HydratedDocument<ShopItem>;

@Schema({ timestamps: true })
export class ShopItem {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
    category: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    basePrice: number;

    @Prop()
    image: string;
}

export const ShopItemSchema = SchemaFactory.createForClass(ShopItem);

