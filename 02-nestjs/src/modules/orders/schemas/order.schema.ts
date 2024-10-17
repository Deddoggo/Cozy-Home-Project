import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

    @Prop()
    deliveryStatus: string;

    @Prop()
    orderTime: Date;

    @Prop()
    deliveryTime: Date;

}

export const OrderSchema = SchemaFactory.createForClass(Order);