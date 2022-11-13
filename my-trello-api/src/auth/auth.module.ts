import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './auth-local.strategy'
@Module({
  imports:[UserModule,PassportModule],
  providers: [AuthService,UserService,LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
