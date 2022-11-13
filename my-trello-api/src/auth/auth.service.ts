import { Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { User } from 'src/user/entities/user.entity';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private jwtService: JwtService
    ){}
        
    async validateUser(email:string, password:string){

        const user = await this.userRepository.findOne({where:{email}});

        if(user && await bcrypt.compare(password,user.password)){

            return user;
        }

        return null
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
