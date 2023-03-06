import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  typeUser: string;

  @Prop({ unique: true })
  identification: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  tel: number;

  @Prop()
  password: string;

  @Prop({
    default: 'ACTIVE',
  })
  status: string;

  @Prop({
    default: 'user',
  })
  roles: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
