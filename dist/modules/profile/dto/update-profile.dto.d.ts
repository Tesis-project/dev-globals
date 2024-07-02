import { File_Model_I } from "../../../core/interfaces";
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
}
export declare class Update_Profile_Dto {
    _id: string;
    artistic_name?: string;
    bio_short?: string;
    profile_pic?: File_Model_I;
    cover_pic?: File_Model_I;
    credentials?: Credentials_Dto;
    media?: Media_Dto;
    socials?: Socials_Dto;
}
