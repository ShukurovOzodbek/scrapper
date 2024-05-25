import {IsEmail} from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string
    
    @IsEmail()
    password: string
}