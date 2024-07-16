import { HttpStatus, HttpException } from "@nestjs/common";
import { extname } from "path";
import { Media_Document_Format_Enum, Media_Format_Enum, Media_Image_Format_Enum, Media_Video_Format_Enum } from "../interfaces";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const generateRandomFileName = () => {

    const randomName = Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().getTime();
    return `${randomName}_${timestamp}`;

};

export const fileValidatorFilter = (req: any, file: any, callback: any) => {

    const fileExt = extname(file.originalname).toUpperCase().substring(1);

    if (!Object.values(Media_Format_Enum).includes(fileExt as Media_Format_Enum)) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Formato de archivo no válido',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    if (file.size > MAX_FILE_SIZE) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    const randomFileName = generateRandomFileName();

    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;

    callback(null, true);

};

export const fileValidatorFilter_IMAGE = (req: any, file: any, callback: any) => {

    const fileExt = extname(file.originalname).toUpperCase().substring(1);

    if (!Object.values(Media_Image_Format_Enum).includes(fileExt as Media_Image_Format_Enum)) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Formato de imagen no válido',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    if (file.size > MAX_FILE_SIZE) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    const randomFileName = generateRandomFileName();

    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;

    callback(null, true);

};

export const fileValidatorFilter_DOCUMENT = (req: any, file: any, callback: any) => {

    const fileExt = extname(file.originalname).toUpperCase().substring(1);

    if (!Object.values(Media_Document_Format_Enum).includes(fileExt as Media_Document_Format_Enum)) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Formato de documento no válido',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    if (file.size > MAX_FILE_SIZE) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    const randomFileName = generateRandomFileName();

    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;

    callback(null, true);

};

export const fileValidatorFilter_VIDEO = (req: any, file: any, callback: any) => {

    const fileExt = extname(file.originalname).toUpperCase().substring(1);

    if (!Object.values(Media_Video_Format_Enum).includes(fileExt as Media_Video_Format_Enum)) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Formato de documento no válido',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    if (file.size > MAX_FILE_SIZE) {

        const response = {
            ok: false,
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new HttpException(response, response.statusCode), false);

    }

    const randomFileName = generateRandomFileName();

    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;

    callback(null, true);

};