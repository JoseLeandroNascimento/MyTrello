import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)private readonly repositoryUser: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto){

    const newUser = await this.repositoryUser.save({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password,10)
    })

    return {
      ...newUser,
      password:undefined
    }
  } 


  async findOneEmail(email: string) {

    const user = await this.repositoryUser.findOne({
      where:{
        email:email
      }
    })

    return user;
  } 

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
