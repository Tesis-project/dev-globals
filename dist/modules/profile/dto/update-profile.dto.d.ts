import { Create_Profile_Dto } from "./create-profile.dto";
import { Media_I } from "../../media/interfaces";
export declare class Credentials_Dto {
    identity_file: Media_I;
    profesional_file: Media_I;
}
export declare class Media_Dto {
    image_gallery: Media_I[];
    video_gallery: Media_I[];
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
    profile_pic?: Media_I;
    cover_pic?: Media_I;
    credentials?: Credentials_Dto;
    media?: Media_Dto;
    socials?: Socials_Dto;
}
export {};
