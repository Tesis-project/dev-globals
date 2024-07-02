
import { SchemaKey_I, File_Model_I } from "../../../core/interfaces";
import { User_I } from "../../user/interfaces";


 export interface Profile_I extends SchemaKey_I {

    artistic_name?: string;
    bio_short?: string;
    profile_pic?: File_Model_I;
    cover_pic?: File_Model_I;
    credentials?: {
        identity_file?: File_Model_I;
        profesional_file?: File_Model_I;
    };
    media?: {
        image_gallery?: File_Model_I[];
        video_gallery?: File_Model_I[];
    };
    socials?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        youtube?: string;
        tiktok?: string;
    };
    user?: User_I;

    updated_at?: Date;

}

