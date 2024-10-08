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
exports.SearchUser_Dto = void 0;
const class_validator_1 = require("class-validator");
const interfaces_1 = require("../../profile/interfaces");
// esport type userArtist_Type = "all" | "singer" | "instrumentist" | "orchestra_director" | "scene_director"
class SearchUser_Dto {
}
exports.SearchUser_Dto = SearchUser_Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(interfaces_1.typeArtist_Type_default),
    __metadata("design:type", String)
], SearchUser_Dto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.term !== '' && o.term !== null && o.term !== undefined),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchUser_Dto.prototype, "term", void 0);
;
//# sourceMappingURL=search-user.dto.js.map