import { User } from '@/modules/users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop()
    tags: string[];

}

export const BlogSchema = SchemaFactory.createForClass(Blog);
