import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Hospital } from './entities/hospital.entity';
import { Rol } from 'src/roles/decorator/roles.decorador';
import { JwtAuthGuard } from 'src/roles/guards/roles/jwt-auth.guard';
import { Role } from 'src/roles/role.enum';

@ApiBearerAuth()
@ApiTags('hospital')
@Controller('hospital')

// @UseGuards(JwtAuthGuard)
// @Rol(Role.Hospital)
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Post()
  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalService.create(createHospitalDto);
  }

  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHospitalDto: UpdateHospitalDto,
  ) {
    return this.hospitalService.update(+id, updateHospitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalService.remove(+id);
  }
}
