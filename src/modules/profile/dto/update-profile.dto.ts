
import { Type } from "class-transformer";
import { IsOptional, IsString, MinLength, ValidateNested, IsUUID } from "class-validator";
import { File_Model_I } from "../../../core/interfaces";


export class Credentials_Dto {

    @IsOptional()
    identity_file: File_Model_I;
    @IsOptional()
    profesional_file: File_Model_I;

}

export class Media_Dto {

    @IsOptional()
    image_gallery: File_Model_I[];
    @IsOptional()
    video_gallery: File_Model_I[];

}

export class Socials_Dto {

    @IsOptional()
    @IsString()
    facebook: string;
    @IsOptional()
    @IsString()
    twitter: string;
    @IsOptional()
    @IsString()
    instagram: string;
    @IsOptional()
    @IsString()
    youtube: string;
    @IsOptional()
    @IsString()
    tiktok: string;

}

export class Update_Profile_Dto {

    @IsUUID(4)
    _id: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    artistic_name?: string;

    @IsOptional()
    @IsString()
    bio_short?: string;

    @IsOptional()
    profile_pic?: File_Model_I;

    @IsOptional()
    cover_pic?: File_Model_I;

    @IsOptional()
    @ValidateNested()
    @Type(() => Credentials_Dto)
    credentials?: Credentials_Dto;

    @IsOptional()
    @ValidateNested()
    @Type(() => Media_Dto)
    media?: Media_Dto;

    @IsOptional()
    @ValidateNested()
    @Type(() => Socials_Dto)
    socials?: Socials_Dto;

}