import { IsDate, MaxLength, MinLength } from 'class-validator';

export class CreatePatientDoctorDto {
  @MinLength(3)
  @MaxLength(25)
  name: string;

  address: string;

  @IsDate()
  birthDate: string;
}
