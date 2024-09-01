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
exports.Create_Vacant_Dto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const interfaces_1 = require("../../../../core/interfaces");
const interfaces_2 = require("../interfaces");
const interfaces_3 = require("../../../profile/interfaces");
class Direction_Dto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Direction_Dto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Direction_Dto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Direction_Dto.prototype, "state", void 0);
class Vacant_Transport_Dto {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Vacant_Transport_Dto.prototype, "enable", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_2.Vacant_Transport_Enum, {
        message: `Type must be one of the following values: ${{ ...interfaces_2.Vacant_Transport_Enum }}`
    }),
    __metadata("design:type", String)
], Vacant_Transport_Dto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Vacant_Transport_Dto.prototype, "desc", void 0);
class Vacant_Housing_Dto {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Vacant_Housing_Dto.prototype, "enable", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_2.Vacant_Housing_Enum, {
        message: `Type must be one of the following values: ${{ ...interfaces_2.Vacant_Housing_Enum }}`
    }),
    __metadata("design:type", String)
], Vacant_Housing_Dto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Vacant_Housing_Dto.prototype, "desc", void 0);
class Vacant_Budget_Costs_Dto {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Vacant_Budget_Costs_Dto.prototype, "enable", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Vacant_Budget_Costs_Dto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Vacant_Budget_Costs_Dto.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Currency_Enum, {
        message: `Currency must be one of the following values: ${{ ...interfaces_1.Currency_Enum }}`
    }),
    __metadata("design:type", String)
], Vacant_Budget_Costs_Dto.prototype, "currency", void 0);
class Vacant_Budget_Payment_Dto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Vacant_Budget_Payment_Dto.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(interfaces_1.Currency_Enum, {
        message: `Currency must be one of the following values: ${{ ...interfaces_1.Currency_Enum }}`
    }),
    __metadata("design:type", String)
], Vacant_Budget_Payment_Dto.prototype, "currency", void 0);
class Vacant_Operation_Dto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], Vacant_Operation_Dto.prototype, "start_at", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], Vacant_Operation_Dto.prototype, "end_at", void 0);
class Create_Vacant_Dto {
}
exports.Create_Vacant_Dto = Create_Vacant_Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Create_Vacant_Dto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Create_Vacant_Dto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Vacant_Operation_Dto),
    __metadata("design:type", Vacant_Operation_Dto)
], Create_Vacant_Dto.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Create_Vacant_Dto.prototype, "role_desc", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsEnum)(interfaces_3.Artist_Enum, { each: true }),
    __metadata("design:type", Array)
], Create_Vacant_Dto.prototype, "role_type", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Vacant_Transport_Dto),
    __metadata("design:type", Vacant_Transport_Dto)
], Create_Vacant_Dto.prototype, "transport_service", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Vacant_Housing_Dto),
    __metadata("design:type", Vacant_Housing_Dto)
], Create_Vacant_Dto.prototype, "housing_service", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Vacant_Budget_Costs_Dto),
    __metadata("design:type", Vacant_Budget_Costs_Dto)
], Create_Vacant_Dto.prototype, "vacant_costs", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Vacant_Budget_Payment_Dto),
    __metadata("design:type", Vacant_Budget_Payment_Dto)
], Create_Vacant_Dto.prototype, "vacant_payment", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Direction_Dto),
    __metadata("design:type", Direction_Dto)
], Create_Vacant_Dto.prototype, "direction", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Create_Vacant_Dto.prototype, "specific_conditions", void 0);
/* let aux_create: Create_Vacant_Dto =
{
    "title": "Titulo vacante",
    "desc": "Descripcion vacante",
    "direction": {
        "address": "Calle falsa 123",
        "city": "Springfield",
        "state": "Springfield"
    },
    "operation": {
        "start_at": "2024-08-31 20:36:57+00",
        "end_at": "2024-08-31 20:36:57+00"
    },
    "role_type": ["SINGER"],
    "role_desc": "Descripcion del rol",
    "transport_service": {
        "enable": true,
        "type": "LAND",
        "desc": "Descripcion del servicio de transporte"
    },
    "housing_service": {
        "enable": true,
        "type": "HOTEL",
        "desc": "Descripcion del servicio de hospedaje"
    },
    "vacant_costs": {
        "enable": true,
        "desc": "Descripcion de los costos",
        "total": 500,
        "currency": "USD"
    },
    "vacant_payment": {
        "total": 1000,
        "currency": "USD"
    },
    "specific_conditions": "Condiciones especificas"
} */ 
//# sourceMappingURL=Create-vacant.dto.js.map