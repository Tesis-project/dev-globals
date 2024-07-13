
import { IsEnum, IsUUID } from "class-validator";
import { Media_Reference_Enum } from "../interfaces";


export class Create_Media_Dto {

    @IsEnum(Media_Reference_Enum, {
        message: `Reference must be one of the following values: ${{ ...Media_Reference_Enum }}`
    })
    reference: string;

    @IsUUID(4, { message: 'reference_id is Invalid UUID' })
    reference_id: string;

    // @IsUUID(4, { message: 'user is Invalid UUID' })
    // user: string;

}