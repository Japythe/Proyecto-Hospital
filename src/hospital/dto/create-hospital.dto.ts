import { MaxLength, MinLength } from 'class-validator';

export class CreateHospitalDto {
  @MinLength(3)
  @MaxLength(25)
  name: string;

  address: string;

  services: string;
}
