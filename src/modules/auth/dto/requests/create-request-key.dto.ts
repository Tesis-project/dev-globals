import { IsEnum, IsOptional, IsString, IsUUID, ValidateIf } from "class-validator";
import { RequestType_Enum } from "../../interfaces/requests";

export class Create_Request_Key_Dto {

    @IsEnum(RequestType_Enum, {
        message: `type must be one of the following values: ${{ ...RequestType_Enum }}`
    })
    type: RequestType_Enum;

    @IsOptional()
    @IsUUID(4, { message: 'Auth is Invalid UUID' })
    auth: string;

    @IsOptional()
    @IsString()
    detail: string;

}