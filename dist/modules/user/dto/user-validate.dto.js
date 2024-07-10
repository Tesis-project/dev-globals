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
exports.User_I_Dto = void 0;
const class_validator_1 = require("class-validator");
const interfaces_1 = require("../../auth/interfaces");
const class_transformer_1 = require("class-transformer");
class User_I_Dto {
}
exports.User_I_Dto = User_I_Dto;
__decorate([
    (0, class_validator_1.IsUUID)(4, { message: 'Invalid UUID' }),
    __metadata("design:type", String)
], User_I_Dto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User_I_Dto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.AuthStatus_Enum, {
        message: `status must be one of the following values: ${{ ...interfaces_1.AuthStatus_Enum }}`
    }),
    __metadata("design:type", String)
], User_I_Dto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(4, { message: 'Invalid UUID' }),
    __metadata("design:type", String)
], User_I_Dto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], User_I_Dto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], User_I_Dto.prototype, "token", void 0);
//# sourceMappingURL=user-validate.dto.js.map