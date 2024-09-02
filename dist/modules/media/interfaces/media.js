"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media_Reference_Enum = exports.Media_Format_Enum = exports.Media_Document_Format_Enum = exports.Media_Video_Format_Enum = exports.Media_Image_Format_Enum = exports.Media_Type_Enum = void 0;
var Media_Type_Enum;
(function (Media_Type_Enum) {
    Media_Type_Enum["IMAGE"] = "IMAGE";
    Media_Type_Enum["VIDEO"] = "VIDEO";
    Media_Type_Enum["DOCUMENT"] = "DOCUMENT";
})(Media_Type_Enum || (exports.Media_Type_Enum = Media_Type_Enum = {}));
var Media_Image_Format_Enum;
(function (Media_Image_Format_Enum) {
    Media_Image_Format_Enum["JPG"] = "JPG";
    Media_Image_Format_Enum["JPEG"] = "JPEG";
    Media_Image_Format_Enum["PNG"] = "PNG";
})(Media_Image_Format_Enum || (exports.Media_Image_Format_Enum = Media_Image_Format_Enum = {}));
var Media_Video_Format_Enum;
(function (Media_Video_Format_Enum) {
    Media_Video_Format_Enum["MP4"] = "MP4";
})(Media_Video_Format_Enum || (exports.Media_Video_Format_Enum = Media_Video_Format_Enum = {}));
var Media_Document_Format_Enum;
(function (Media_Document_Format_Enum) {
    Media_Document_Format_Enum["PDF"] = "PDF";
    Media_Document_Format_Enum["DOC"] = "DOC";
    Media_Document_Format_Enum["DOCX"] = "DOCX";
})(Media_Document_Format_Enum || (exports.Media_Document_Format_Enum = Media_Document_Format_Enum = {}));
var Media_Format_Enum;
(function (Media_Format_Enum) {
    Media_Format_Enum["JPG"] = "JPG";
    Media_Format_Enum["JPEG"] = "JPEG";
    Media_Format_Enum["PNG"] = "PNG";
    Media_Format_Enum["MP4"] = "MP4";
    Media_Format_Enum["PDF"] = "PDF";
    Media_Format_Enum["DOC"] = "DOC";
    Media_Format_Enum["DOCX"] = "DOCX";
})(Media_Format_Enum || (exports.Media_Format_Enum = Media_Format_Enum = {}));
var Media_Reference_Enum;
(function (Media_Reference_Enum) {
    Media_Reference_Enum["PROFILE_PROFILE_PIC"] = "PROFILE_PROFILE_PIC";
    Media_Reference_Enum["PROFILE_COVER_PIC"] = "PROFILE_COVER_PIC";
    Media_Reference_Enum["PROFILE_CREDENTIAL_IDENTITY"] = "PROFILE_CREDENTIALS_IDENTITY";
    Media_Reference_Enum["PROFILE_CREDENTIAL_PROFESSIONAL"] = "PROFILE_CREDENTIALS_PROFESSIONAL";
    Media_Reference_Enum["PROFILE_MEDIA_VIDEO_GALLERY"] = "PROFILE_MEDIA_VIDEO_GALLERY";
    Media_Reference_Enum["PROFILE_MEDIA_IMAGE_GALLERY"] = "PROFILE_MEDIA_IMAGE_GALLERY";
    Media_Reference_Enum["VACANT_PIC"] = "VACANT_PIC";
    Media_Reference_Enum["VACANT_CONTRACT_DOCUMENT"] = "VACANT_CONTRACT_DOCUMENT";
})(Media_Reference_Enum || (exports.Media_Reference_Enum = Media_Reference_Enum = {}));
/*
const Media_Format_Enum = {
    ...Media_Image_Format_Enum,
    ...Media_Video_Format_Enum,
    ...Media_Document_Format_Enum
} as const;

type Media_Format_Enum = typeof Media_Format_Enum[keyof typeof Media_Format_Enum]; */ 
//# sourceMappingURL=media.js.map