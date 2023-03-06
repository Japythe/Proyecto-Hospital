import { Module } from '@nestjs/common';
import { PatientDoctorService } from './patient-doctor.service';
import { PatientDoctorController } from './patient-doctor.controller';
import { PatientDoctor } from './entities/patient-doctor.entity';
import { PatientDoctorSchema } from './Schema/patient-doctor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PatientDoctor.name,
        schema: PatientDoctorSchema,
      },
    ]),
  ],
  controllers: [PatientDoctorController],
  providers: [PatientDoctorService],
})
export class PatientDoctorModule {}
