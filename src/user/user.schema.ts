import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: ['admin', 'simple'] })
  role: 'admin' | 'simple';

  // You can add more fields here
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
