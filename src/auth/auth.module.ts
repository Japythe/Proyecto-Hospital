import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/users/Schema/Users.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtconstants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
    ]),
    JwtModule.register({
        secret: jwtConstants.secret,
      signOptions: { expiresIn: '18h' },
        }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
