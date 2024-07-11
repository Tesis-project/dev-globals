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
exports.Update_Bank_Data_Dto = exports.Bank_Data_Dto = void 0;
const class_validator_1 = require("class-validator");
const interfaces_1 = require("../interfaces");
const class_transformer_1 = require("class-transformer");
class Bank_Data_Dto {
}
exports.Bank_Data_Dto = Bank_Data_Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Payment_Type_Enum, {
        message: `Type must be one of the following values : ${{ ...interfaces_1.Payment_Type_Enum }}`
    }),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Banks_Enum, {
        message: `Gender must be one of the following values: ${{ ...interfaces_1.Banks_Enum }}`
    }),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "bank_name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.number !== '' && o.number !== null && o.number !== undefined),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "titular", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "person_id", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.phone !== '' && o.phone !== null && o.phone !== undefined),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], Bank_Data_Dto.prototype, "phone", void 0);
class Update_Bank_Data_Dto {
}
exports.Update_Bank_Data_Dto = Update_Bank_Data_Dto;
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Bank_Data_Dto),
    __metadata("design:type", Array)
], Update_Bank_Data_Dto.prototype, "payment_accounts", void 0);
//# sourceMappingURL=update-bank.dto.js.map