import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './auth-local.strategy'
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './contants'

@Module({
  imports:[UserModule,PassportModule,JwtModule.register({secret:jwtConstants.secret,signOptions:{expiresIn:"20s"}})],
  providers: [AuthService,UserService,LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
