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
exports.Create_Request_Key_Dto = void 0;
const class_validator_1 = require("class-validator");
const requests_1 = require("../../interfaces/requests");
class Create_Request_Key_Dto {
}
exports.Create_Request_Key_Dto = Create_Request_Key_Dto;
__decorate([
    (0, class_validator_1.IsEnum)(requests_1.RequestType_Enum, {
        message: `type must be one of the following values: ${{ ...requests_1.RequestType_Enum }}`
    }),
    __metadata("design:type", String)
], Create_Request_Key_Dto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(4, { message: 'Auth is Invalid UUID' }),
    __metadata("design:type", String)
], Create_Request_Key_Dto.prototype, "auth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Create_Request_Key_Dto.prototype, "detail", void 0);
//# sourceMappingURL=create-request-key.dto.js.map