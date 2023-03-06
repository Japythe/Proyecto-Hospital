import { Test, TestingModule } from '@nestjs/testing';
import { PatientDoctorController } from './patient-doctor.controller';
import { PatientDoctorService } from './patient-doctor.service';

describe('PatientDoctorController', () => {
  let controller: PatientDoctorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientDoctorController],
      providers: [PatientDoctorService],
    }).compile();

    controller = module.get<PatientDoctorController>(PatientDoctorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
