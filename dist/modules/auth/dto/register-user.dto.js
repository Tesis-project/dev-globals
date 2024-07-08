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
exports.RegisterAuth_Dto = void 0;
const class_validator_1 = require("class-validator");
const interfaces_1 = require("../interfaces");
class RegisterAuth_Dto {
}
exports.RegisterAuth_Dto = RegisterAuth_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], RegisterAuth_Dto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], RegisterAuth_Dto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterAuth_Dto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.User_Role_Enum, {
        message: `Role must be one of the following values: ${{ ...interfaces_1.User_Role_Enum }}`
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RegisterAuth_Dto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number',
    }),
    __metadata("design:type", String)
], RegisterAuth_Dto.prototype, "password", void 0);
//# sourceMappingURL=register-user.dto.js.map