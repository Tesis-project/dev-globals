"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileValidatorFilter_VIDEO = exports.fileValidatorFilter_DOCUMENT = exports.fileValidatorFilter_IMAGE = exports.fileValidatorFilter = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const interfaces_1 = require("../interfaces");
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const generateRandomFileName = () => {
    const randomName = Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().getTime();
    return `${randomName}_${timestamp}`;
};
const fileValidatorFilter = (req, file, callback) => {
    const fileExt = (0, path_1.extname)(file.originalname).toUpperCase().substring(1);
    if (!Object.values(interfaces_1.Media_Format_Enum).includes(fileExt)) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'Formato de archivo no válido',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    if (file.size > MAX_FILE_SIZE) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    const randomFileName = generateRandomFileName();
    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;
    callback(null, true);
};
exports.fileValidatorFilter = fileValidatorFilter;
const fileValidatorFilter_IMAGE = (req, file, callback) => {
    const fileExt = (0, path_1.extname)(file.originalname).toUpperCase().substring(1);
    if (!Object.values(interfaces_1.Media_Image_Format_Enum).includes(fileExt)) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'Formato de imagen no válido',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    if (file.size > MAX_FILE_SIZE) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    const randomFileName = generateRandomFileName();
    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;
    callback(null, true);
};
exports.fileValidatorFilter_IMAGE = fileValidatorFilter_IMAGE;
const fileValidatorFilter_DOCUMENT = (req, file, callback) => {
    const fileExt = (0, path_1.extname)(file.originalname).toUpperCase().substring(1);
    if (!Object.values(interfaces_1.Media_Document_Format_Enum).includes(fileExt)) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'Formato de documento no válido',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    if (file.size > MAX_FILE_SIZE) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    const randomFileName = generateRandomFileName();
    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;
    callback(null, true);
};
exports.fileValidatorFilter_DOCUMENT = fileValidatorFilter_DOCUMENT;
const fileValidatorFilter_VIDEO = (req, file, callback) => {
    const fileExt = (0, path_1.extname)(file.originalname).toUpperCase().substring(1);
    if (!Object.values(interfaces_1.Media_Video_Format_Enum).includes(fileExt)) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'Formato de documento no válido',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    if (file.size > MAX_FILE_SIZE) {
        const response = {
            ok: false,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'El archivo excede el tamaño máximo permitido (10MB)',
        };
        return callback(new common_1.HttpException(response, response.statusCode), false);
    }
    const randomFileName = generateRandomFileName();
    file.originalname = `${randomFileName}.${fileExt.toLowerCase()}`;
    callback(null, true);
};
exports.fileValidatorFilter_VIDEO = fileValidatorFilter_VIDEO;
//# sourceMappingURL=file-validator.js.map