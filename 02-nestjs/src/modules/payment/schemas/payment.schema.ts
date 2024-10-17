import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, mongo } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ timestamps: true })
export class Payment {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

    @Prop()
    paymentMethod: string;

    @Prop()
    provider: string;

    @Prop()
    accountNumber: string;

    @Prop()
    expiredDate: Date;

    @Prop()
    totalPrice: number;


}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
