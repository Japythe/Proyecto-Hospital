import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDoctorDocument = PatientDoctor & Document;

@Schema()
export class PatientDoctor {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  birthDate: string;
}

export const PatientDoctorSchema = SchemaFactory.createForClass(PatientDoctor);
