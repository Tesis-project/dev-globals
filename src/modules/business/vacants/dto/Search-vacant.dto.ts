
import { IsEnum } from "class-validator";
import { Artist_Enum } from "../../../profile/interfaces";

export class Search_Vacant_Dto {

    @IsEnum(Artist_Enum, {
        message: `Type vacant must be one of the following values: ${{ ...Artist_Enum }}`
    })
    type: Artist_Enum;

}

