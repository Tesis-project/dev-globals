import { IsEnum, IsOptional, IsString } from "class-validator";
import { Vacant_Postulation_Status_Enum } from "../interfaces";


export class Evaluate_Postulation_Dto {

    @IsOptional()
    @IsString()
    owner_comment: string;

    @IsEnum(Vacant_Postulation_Status_Enum, {
        message: `Status must be one of the following values: ${{ ...Vacant_Postulation_Status_Enum }}`
    })
    status: Vacant_Postulation_Status_Enum;

}