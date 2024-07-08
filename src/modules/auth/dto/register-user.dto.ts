import { IsString, IsEmail, IsStrongPassword, MinLength, IsOptional, IsEnum } from 'class-validator';
import { User_Role_Enum } from '../interfaces';


export class RegisterAuth_Dto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @MinLength(3)
    last_name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsEnum(User_Role_Enum, {
        message: `Role must be one of the following values: ${{ ...User_Role_Enum }}`
    })
    @IsOptional()
    role: User_Role_Enum;

    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    })
    password: string;

}
