import { PartialType } from '@nestjs/swagger';
import { CreatePatientDoctorDto } from './create-patient-doctor.dto';

export class UpdatePatientDoctorDto extends PartialType(CreatePatientDoctorDto) {}
