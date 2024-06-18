import {IsEmail, IsString} from "class-validator";

export class SigninUsersDto {
    @IsEmail()
    email: string
    
    @IsString()
    password: string
}