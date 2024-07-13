
import { IsEnum, IsUUID } from "class-validator";
import { Media_Reference_Enum, Media_Type_Enum } from "../interfaces";


export class Create_Media_Dto {

    @IsEnum(Media_Reference_Enum, {
        message: `Reference must be one of the following values: ${{ ...Media_Reference_Enum }}`
    })
    reference: Media_Reference_Enum;

    @IsEnum(Media_Type_Enum, {
        message: `type must be one of the following values: ${{ ...Media_Type_Enum }}`
    })
    type: Media_Type_Enum;

    @IsUUID(4, { message: 'reference_id is Invalid UUID' })
    reference_id: string;

}