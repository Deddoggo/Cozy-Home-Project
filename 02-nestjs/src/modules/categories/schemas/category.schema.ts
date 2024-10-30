import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
    @Prop({ required: true, unique: true })
    title: string;

    @Prop({ required: false })
    description?: string;

    @Prop({ required: false })
    image?: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
