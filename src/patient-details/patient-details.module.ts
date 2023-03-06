import { Module } from '@nestjs/common';
import { PatientDetailsService } from './patient-details.service';
import { PatientDetailsController } from './patient-details.controller';
import { PatientDetails, PatientDetailsSchema } from './Schema/patient-details.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PatientDetails.name,
        schema: PatientDetailsSchema,
      },
    ]),
  ],
  controllers: [PatientDetailsController],
  providers: [PatientDetailsService],
})
export class PatientDetailsModule {}
