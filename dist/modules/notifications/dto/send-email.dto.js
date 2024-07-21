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
exports.Send_Email_Dto = exports.Email_Change_Email_Dto = exports.Email_Reset_Password_Dto = exports.Email_Confirm_Account_Dto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class Email_Confirm_Account_Dto {
}
exports.Email_Confirm_Account_Dto = Email_Confirm_Account_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Email_Confirm_Account_Dto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Email_Confirm_Account_Dto.prototype, "key", void 0);
class Email_Reset_Password_Dto {
}
exports.Email_Reset_Password_Dto = Email_Reset_Password_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Email_Reset_Password_Dto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Email_Reset_Password_Dto.prototype, "key", void 0);
class Email_Change_Email_Dto {
}
exports.Email_Change_Email_Dto = Email_Change_Email_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Email_Change_Email_Dto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Email_Change_Email_Dto.prototype, "key", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Email_Change_Email_Dto.prototype, "new_email", void 0);
class Send_Email_Dto {
}
exports.Send_Email_Dto = Send_Email_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Send_Email_Dto.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Email_Confirm_Account_Dto),
    __metadata("design:type", Email_Confirm_Account_Dto)
], Send_Email_Dto.prototype, "confirm_account", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Email_Reset_Password_Dto),
    __metadata("design:type", Email_Reset_Password_Dto)
], Send_Email_Dto.prototype, "reset_password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Email_Change_Email_Dto),
    __metadata("design:type", Email_Change_Email_Dto)
], Send_Email_Dto.prototype, "change_email", void 0);
//# sourceMappingURL=send-email.dto.js.map