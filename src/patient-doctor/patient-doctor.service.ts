import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDoctorDto } from './dto/create-patient-doctor.dto';
import { UpdatePatientDoctorDto } from './dto/update-patient-doctor.dto';
import { PatientDoctor } from './entities/patient-doctor.entity';
import { PatientDoctorDocument } from './Schema/patient-doctor.schema';

@Injectable()
export class PatientDoctorService {
  constructor(
    @InjectModel(PatientDoctor.name)
    private PatientDoctorModule: Model<PatientDoctorDocument>,
  ) { }
  
  async create(createPatientDoctorDto: CreatePatientDoctorDto) {
    const PatientDoctorCreated = await this.PatientDoctorModule.create(createPatientDoctorDto);
    return PatientDoctorCreated;
  }

  findAll() {
    return `This action returns all patientDoctor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientDoctor`;
  }

  update(id: number, updatePatientDoctorDto: UpdatePatientDoctorDto) {
    return `This action updates a #${id} patientDoctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientDoctor`;
  }
}
