import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/users/Schema/Users.schema';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-user.dto';
import { compare, hash } from 'bcrypt';
import { throwError } from 'rxjs';
import { JwtService } from '@nestjs/jwt/dist';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private UsersModule: Model<UsersDocument>,
    private jwtService: JwtService,
  ) {}

  // Registro de usuario

  async register(createAuthDto: CreateAuthDto) {
    const { password, ...user } = createAuthDto;

    const detailUser = {
      password: await hash(password, 10),
      ...user,
    };
    const userCreated = await this.UsersModule.create(detailUser);
    return userCreated;
  }

  // Iniciar sesion

  async login(loginObject: LoginAuthDto) {
    const { identification, password } = loginObject;
    const userFound = await this.UsersModule.findOne({ identification });
    if (!userFound) new HttpException('The user does not exist', 404);

    const isMatch = await compare(password, userFound?.password);

    if (!isMatch) throw new HttpException('Password Incorrect', 403);

    const payload = {
      id: userFound._id,
      identification: userFound.identification,
      roles: userFound.roles as Role,
    };

    const token = await this.jwtService.sign(payload);
    const data = {
      Users: userFound,
      token,
    };

    return data;
  }
}
