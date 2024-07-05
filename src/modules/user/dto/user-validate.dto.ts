
import { IsDate, IsEmail, IsEnum, IsUUID } from "class-validator";
import { AuthStatus_Enum } from "../../auth/interfaces";

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

    @IsDate()
    created_at: Date;

}