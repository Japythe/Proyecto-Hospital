import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HospitalDocument = Hospital & Document;

@Schema()
export class Hospital {
  @Prop()
  name: string;

  @Prop({ unique: true })
  address: string;

  @Prop()
  services: string;


  
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
