import { PartialType } from '@nestjs/swagger';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { CreateAuthDto } from './create-auth.dto';

export class LoginAuthDto {
  identification: string;

  @MinLength(5)
  @MaxLength(25)
  password: string;
}

