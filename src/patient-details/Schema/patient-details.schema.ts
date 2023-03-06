import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDetailsDocument = PatientDetails & Document;

@Schema()
export class PatientDetails {
  @Prop()
  medicalObservations: string;

  @Prop()
  healthStatus: string;

  @Prop()
  medicalArea: string;

}

export const PatientDetailsSchema = SchemaFactory.createForClass(PatientDetails);
