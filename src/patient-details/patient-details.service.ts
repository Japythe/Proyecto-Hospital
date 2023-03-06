import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDetailDto } from './dto/create-patient-detail.dto';
import { UpdatePatientDetailDto } from './dto/update-patient-detail.dto';
import { PatientDetails, PatientDetailsDocument } from './Schema/patient-details.schema';

@Injectable()
export class PatientDetailsService {
  constructor(
    @InjectModel(PatientDetails.name)
    private PatientDetailsModule: Model<PatientDetailsDocument>,
  ) {}
  async create(createPatientDetailsDto: CreatePatientDetailDto) {
    const PatientDetailsCreated = await this.PatientDetailsModule.create(createPatientDetailsDto);
    return PatientDetailsCreated;
  }

  findAll() {
    return `This action returns all patientDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientDetail`;
  }

  update(id: number, updatePatientDetailDto: UpdatePatientDetailDto) {
    return `This action updates a #${id} patientDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientDetail`;
  }
}
