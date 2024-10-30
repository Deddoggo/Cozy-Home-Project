import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    user: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: false }) // Optional field
    image?: string;

    @Prop({ required: false })
    tags?: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
