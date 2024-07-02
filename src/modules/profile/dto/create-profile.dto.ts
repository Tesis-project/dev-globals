import { IsString, IsUUID } from "class-validator";






export class Create_Profile_Dto {

    @IsString()
    @IsUUID(4)
    user: string;

}