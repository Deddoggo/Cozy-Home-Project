
import { CartItem } from '@/modules/cart.items/schemas/cart.item.schema';
import { Order } from '@/modules/orders/schemas/order.schema';
import { Payment } from '@/modules/payment/schemas/payment.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type OrderDetailDocument = HydratedDocument<OrderDetail>;

@Schema({ timestamps: true })
export class OrderDetail {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Order.name })
    order: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Payment.name })
    payment: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CartItem.name })
    cartItem: mongoose.Schema.Types.ObjectId;

    @Prop()
    paymentStatus: number;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
