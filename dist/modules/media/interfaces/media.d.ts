import { SchemaKey_I } from "../../../core/interfaces";
export declare enum Media_Type_Enum {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    DOCUMENT = "DOCUMENT"
}
export declare enum Media_Format_Enum {
    JPG = "JPG",
    PNG = "PNG",
    MP4 = "MP4",
    PDF = "PDF",
    DOC = "DOC",
    DOCX = "DOCX"
}
export interface Media_I extends SchemaKey_I {
    name: string;
    type: Media_Type_Enum;
    file: string;
    folder: string;
    format: Media_Format_Enum;
    src: string;
}
