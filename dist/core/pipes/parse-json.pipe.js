"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseJsonPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let ParseJsonPipe = class ParseJsonPipe {
    async transform(value, { metatype }) {
        if (!value)
            return value;
        let object;
        try {
            object = JSON.parse(value);
        }
        catch (e) {
            throw new common_1.BadRequestException('Invalid JSON format');
        }
        if (!metatype || !this.toValidate(metatype)) {
            return object;
        }
        const entity = (0, class_transformer_1.plainToInstance)(metatype, object);
        const errors = await (0, class_validator_1.validate)(entity);
        if (errors.length > 0) {
            throw new common_1.BadRequestException('Validation failed');
        }
        return entity;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
exports.ParseJsonPipe = ParseJsonPipe;
exports.ParseJsonPipe = ParseJsonPipe = __decorate([
    (0, common_1.Injectable)()
], ParseJsonPipe);
//# sourceMappingURL=parse-json.pipe.js.map