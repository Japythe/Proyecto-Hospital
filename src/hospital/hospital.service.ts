import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital } from './entities/hospital.entity';
import { HospitalDocument } from './Schema/hospital.schema';

@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital.name) private HospitalModule: Model<HospitalDocument>,
  ) {}
  async create(createHospitalDto: CreateHospitalDto) {
    const HospitalCreated = await this.HospitalModule.create(
      createHospitalDto,
    );
    return HospitalCreated;
  }

  findAll() {
    return `This action returns all hospital`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hospital`;
  }

  update(id: number, updateHospitalDto: UpdateHospitalDto) {
    return `This action updates a #${id} hospital`;
  }

  remove(id: number) {
    return `This action removes a #${id} hospital`;
  }
}
