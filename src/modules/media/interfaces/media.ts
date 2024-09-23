
import { SchemaKey_I } from "../../../core/interfaces";
import { User_I } from "../../user/interfaces";



export enum Media_Image_Format_Enum {
    JPG = "JPG",
    JPEG = "JPEG",
    PNG = "PNG"
}

export enum Media_Video_Format_Enum {
    MP4 = "MP4"
}

export enum Media_Document_Format_Enum {
    PDF = "PDF",
    DOC = "DOC",
    DOCX = "DOCX"
}

export enum Media_Format_Enum {
    JPG = "JPG",
    JPEG = "JPEG",
    PNG = "PNG",
    MP4 = "MP4",
    PDF = "PDF",
    DOC = "DOC",
    DOCX = "DOCX",
}

export enum Media_Reference_Enum {

    PROFILE_PROFILE_PIC = "PROFILE_PROFILE_PIC",
    PROFILE_COVER_PIC = "PROFILE_COVER_PIC",
    PROFILE_CREDENTIAL_IDENTITY = "PROFILE_CREDENTIALS_IDENTITY",
    PROFILE_CREDENTIAL_PROFESSIONAL = "PROFILE_CREDENTIALS_PROFESSIONAL",
    PROFILE_MEDIA_VIDEO_GALLERY = "PROFILE_MEDIA_VIDEO_GALLERY",
    PROFILE_MEDIA_IMAGE_GALLERY = "PROFILE_MEDIA_IMAGE_GALLERY",
    VACANT_PIC = "VACANT_PIC",
    VACANT_CONTRACT_DOCUMENT = "VACANT_CONTRACT_DOCUMENT"

}

export enum Media_Type_Enum {

    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    DOCUMENT = "DOCUMENT",
}

export interface Media_I extends SchemaKey_I {

    file?: string;
    folder?: string;
    format?: Media_Format_Enum;
    type?: Media_Type_Enum;
    reference?: Media_Reference_Enum;
    reference_id?: string;
    src?: string;
    user?: User_I | string;
    cloud_file_id?: string;
    updated_at?: Date;

}

