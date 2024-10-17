import { ShopItem } from '@/modules/shop.items/schemas/shop.item.schema';
import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

    @Prop()
    rating: number;

    @Prop()
    image: string;

    @Prop()
    comment: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ShopItem.name })
    shopItem: mongoose.Schema.Types.ObjectId;

}

export const ReviewSchema = SchemaFactory.createForClass(Review);