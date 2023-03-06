import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatientDoctorService } from './patient-doctor.service';
import { CreatePatientDoctorDto } from './dto/create-patient-doctor.dto';
import { UpdatePatientDoctorDto } from './dto/update-patient-doctor.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Rol } from 'src/roles/decorator/roles.decorador';
import { Role } from 'src/roles/role.enum';
import { JwtAuthGuard } from 'src/roles/guards/roles/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('patient-doctor')
@Controller('patient-doctor')
export class PatientDoctorController {
  constructor(private readonly patientDoctorService: PatientDoctorService) {}

  // @UseGuards(JwtAuthGuard)
  // @Rol(Role.User)
  // @Rol(Role.Doctor)
  @Post()
  create(@Body() createPatientDoctorDto: CreatePatientDoctorDto) {
    return this.patientDoctorService.create(createPatientDoctorDto);
  }

  @Get()
  findAll() {
    return this.patientDoctorService.findAll();
  }
  
  // @Rol(Role.User)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientDoctorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePatientDoctorDto: UpdatePatientDoctorDto,
  ) {
    return this.patientDoctorService.update(+id, updatePatientDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientDoctorService.remove(+id);
  }
}
