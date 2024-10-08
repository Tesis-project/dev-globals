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
exports.Create_Media_Dto = void 0;
const class_validator_1 = require("class-validator");
const interfaces_1 = require("../interfaces");
class Create_Media_Dto {
}
exports.Create_Media_Dto = Create_Media_Dto;
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Media_Reference_Enum, {
        message: `Reference must be one of the following values: ${{ ...interfaces_1.Media_Reference_Enum }}`
    }),
    __metadata("design:type", String)
], Create_Media_Dto.prototype, "reference", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Media_Type_Enum, {
        message: `type must be one of the following values: ${{ ...interfaces_1.Media_Type_Enum }}`
    }),
    __metadata("design:type", String)
], Create_Media_Dto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(4, { message: 'reference_id is Invalid UUID' }),
    __metadata("design:type", String)
], Create_Media_Dto.prototype, "reference_id", void 0);
//# sourceMappingURL=create-media.dto.js.map