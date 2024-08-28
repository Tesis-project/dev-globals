import { IsIn, IsOptional, IsString, ValidateIf } from "class-validator";
import { typeArtist_Type_default, userArtist_Type } from "../../profile/interfaces";

// esport type userArtist_Type = "all" | "singer" | "instrumentist" | "orchestra_director" | "scene_director"

export class SearchUser_Dto {

    @IsOptional()
    @IsIn(typeArtist_Type_default)
    type?: userArtist_Type;

    @ValidateIf(o => o.term !== '' && o.term !== null && o.term !== undefined)
    @IsOptional()
    @IsString()
    term?: string;

};
