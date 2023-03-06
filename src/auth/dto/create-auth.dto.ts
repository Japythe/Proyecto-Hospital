import {
  IsEmail,
  IsNotEmpty,
  isNumber,
  IsNumber,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAuthDto {
  typeUser: string;

  @IsNumber()
  identification: string;

  @IsEmail()
  email: string;

  @IsNumber()
  tel: number;

  @MinLength(5)
  @MaxLength(25)
  password: string;
}
