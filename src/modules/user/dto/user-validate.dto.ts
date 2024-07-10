
import { IsDate, IsEmail, IsEnum, IsOptional, IsUUID } from "class-validator";
import { AuthStatus_Enum } from "../../auth/interfaces";
import { Type } from "class-transformer";

export class User_I_Dto {

    @IsUUID(4, { message: 'Invalid UUID' })
    _id: string;

    @IsEmail()
    email: string;

    @IsEnum(AuthStatus_Enum, {
        message: `status must be one of the following values: ${{ ...AuthStatus_Enum }}`
    })
    status: string;

    @IsUUID(4, { message: 'Invalid UUID' })
    user: string;

    @Type(() => Date)
    @IsDate()
    created_at: Date;

    @IsOptional()
    token?: string;

}