import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PatientDetailsService } from './patient-details.service';
import { CreatePatientDetailDto } from './dto/create-patient-detail.dto';
import { UpdatePatientDetailDto } from './dto/update-patient-detail.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Rol } from 'src/roles/decorator/roles.decorador';
import { Role } from 'src/roles/role.enum';
import { JwtAuthGuard } from 'src/roles/guards/roles/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('patient-details')
@Controller('patient-details')

// @UseGuards(JwtAuthGuard)
// @Rol(Role.Hospital)
// @Rol(Role.Doctor)
export class PatientDetailsController {
  constructor(private readonly patientDetailsService: PatientDetailsService) {}

  // @Rol(Role.Doctor)
  @Post()
  create(@Body() createPatientDetailDto: CreatePatientDetailDto) {
    return this.patientDetailsService.create(createPatientDetailDto);
  }

  // @Rol(Role.Hospital)
  @Get()
  findAll() {
    return this.patientDetailsService.findAll();
  }

  // @Rol(Role.Doctor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePatientDetailDto: UpdatePatientDetailDto,
  ) {
    return this.patientDetailsService.update(+id, updatePatientDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientDetailsService.remove(+id);
  }
}
