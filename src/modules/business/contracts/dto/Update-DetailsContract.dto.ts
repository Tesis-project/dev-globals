
import { IsEnum, IsOptional, IsUUID } from "class-validator";
import { Contract_DetailType_Enum } from "../interfaces";


export class Update_DetailsContract_Dto {

    @IsEnum(Contract_DetailType_Enum, {
        message: `Type vacant must be one of the following values: ${{ ...Contract_DetailType_Enum }}`
    })
    type: Contract_DetailType_Enum;

    @IsOptional()
    @IsUUID()
    payment_account?: string;

}