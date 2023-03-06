import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { HospitalModule } from './hospital/hospital.module';
import { PatientDetailsModule } from './patient-details/patient-details.module';
import { PatientDoctorModule } from './patient-doctor/patient-doctor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/denest'),
    UsersModule,
    AuthModule,
    MailModule,
    HospitalModule,
    PatientDetailsModule,
    PatientDoctorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
