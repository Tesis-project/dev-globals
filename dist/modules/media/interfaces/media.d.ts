import { SchemaKey_I } from "../../../core/interfaces";
import { User_I } from "../../user/interfaces";
export declare enum Media_Type_Enum {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    DOCUMENT = "DOCUMENT"
}
export declare enum Media_Format_Enum {
    JPG = "JPG",
    JPEG = "JPEG",
    PNG = "PNG",
    MP4 = "MP4",
    PDF = "PDF",
    DOC = "DOC",
    DOCX = "DOCX"
}
export declare enum Media_Reference_Enum {
    PROFILE_PROFILE_PIC = "PROFILE_PROFILE_PIC",
    PROFILE_COVER_PIC = "PROFILE_COVER_PIC",
    PROFILE_CREDENTIAL_IDENTITY = "PROFILE_CREDENTIALS_IDENTITY",
    PROFILE_CREDENTIAL_PROFESSIONAL = "PROFILE_CREDENTIALS_PROFESSIONAL",
    PROFILE_MEDIA_VIDEO_GALLERY = "PROFILE_MEDIA_VIDEO_GALLERY",
    PROFILE_MEDIA_IMAGE_GALLERY = "PROFILE_MEDIA_IMAGE_GALLERY"
}
export interface Media_I extends SchemaKey_I {
    file: string;
    folder: string;
    format: Media_Format_Enum;
    type: Media_Type_Enum;
    reference: Media_Reference_Enum;
    reference_id: string;
    src: string;
    user: User_I | string;
    created_at?: Date;
}
