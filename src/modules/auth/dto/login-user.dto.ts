import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";


export class LoginAuth_Dto {

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    })
    password: string;

}