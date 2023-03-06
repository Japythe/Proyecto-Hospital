import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  typeUser: string;

  @IsNumber()
  identification: string;

  @IsEmail()
  email: string;

  @IsNumber()
  tel: number;

  @MinLength(5)
  @MaxLength(25)
  @IsNotEmpty()
  password: string;

  status: string;

  roles: string;
}
