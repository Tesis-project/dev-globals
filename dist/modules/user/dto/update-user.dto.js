"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser_Dto = exports.Direction_Dto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
const interfaces_1 = require("../interfaces");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class Direction_Dto {
}
exports.Direction_Dto = Direction_Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Direction_Dto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Direction_Dto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Direction_Dto.prototype, "state", void 0);
class UpdateUser_Dto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUser_Dto) {
}
exports.UpdateUser_Dto = UpdateUser_Dto;
__decorate([
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], UpdateUser_Dto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Gender_Enum, {
        message: `Gender must be one of the following values: ${{ ...interfaces_1.Gender_Enum }}`
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUser_Dto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], UpdateUser_Dto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Direction_Dto),
    __metadata("design:type", Direction_Dto)
], UpdateUser_Dto.prototype, "direction", void 0);
//# sourceMappingURL=update-user.dto.js.map