import { IsString, IsUUID, MinLength } from "class-validator";
import { User_I } from "../../user/interfaces";


export class Create_Notification_Dto {

    @IsString()
    @MinLength(3)
    subject: string;

    @IsString()
    @MinLength(10)
    message: string;

    @IsUUID(4, { message: 'user is a Invalid UUID' })
    user: User_I | string;

}