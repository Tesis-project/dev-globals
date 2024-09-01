
import { IsOptional, IsIn } from "class-validator";
import { typeArtist_Type_default, userArtist_Type } from "../../../profile/interfaces";

export class Search_Vacant_Dto {

    @IsIn(typeArtist_Type_default)
    type: userArtist_Type;

}