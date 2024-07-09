import { File_Model_I } from "../../../core/interfaces";
import { Create_Profile_Dto } from "./create-profile.dto";
export declare class Credentials_Dto {
    identity_file: File_Model_I;
    profesional_file: File_Model_I;
}
export declare class Media_Dto {
    image_gallery: File_Model_I[];
    video_gallery: File_Model_I[];
}
export declare class Socials_Dto {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
    tiktok: string;
    linkedin: string;
}
declare const Update_Profile_Dto_base: import("@nestjs/mapped-types").MappedType<Partial<Create_Profile_Dto>>;
export declare class Update_Profile_Dto extends Update_Profile_Dto_base {
    _id: string;
    artistic_name?: string;
    bio_short?: string;
    profile_pic?: File_Model_I;
    cover_pic?: File_Model_I;
    credentials?: Credentials_Dto;
    media?: Media_Dto;
    socials?: Socials_Dto;
}
export {};
