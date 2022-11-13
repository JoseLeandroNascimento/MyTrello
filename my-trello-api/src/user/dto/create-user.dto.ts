import { IsString,IsEmail,IsBoolean,IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;
    
    @IsString()
    password:string;

    @IsBoolean()
    status:boolean = true;
}
