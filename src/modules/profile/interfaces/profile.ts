
import { SchemaKey_I } from "../../../core/interfaces";
import { Media_I } from "../../media/interfaces";
import { User_I } from "../../user/interfaces";


 export interface Profile_I extends SchemaKey_I {

    artistic_name?: string;
    bio_short?: string;
    profile_pic?: Media_I;
    cover_pic?: Media_I;
    credentials?: {
        identity_file?: Media_I;
        profesional_file?: Media_I;
    };
    media?: {
        image_gallery?: Media_I[];
        video_gallery?: Media_I[];
    };
    socials?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        youtube?: string;
        tiktok?: string;
        linkedin?: string;

    };
    user?: User_I | string;

    updated_at?: Date;

}

