import { Controller ,Post,Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthGuard} from '@nestjs/passport';
import {Request as Request_express} from 'express';

@Controller('auth')
export class AuthController {

    constructor(
        private authService:AuthService
    ){}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    login(@Request() req:Request_express){

        return req.user
    }
}
