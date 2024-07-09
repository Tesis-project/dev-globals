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
exports.Update_Profile_Dto = exports.Socials_Dto = exports.Media_Dto = exports.Credentials_Dto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_profile_dto_1 = require("./create-profile.dto");
class Credentials_Dto {
}
exports.Credentials_Dto = Credentials_Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], Credentials_Dto.prototype, "identity_file", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], Credentials_Dto.prototype, "profesional_file", void 0);
class Media_Dto {
}
exports.Media_Dto = Media_Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], Media_Dto.prototype, "image_gallery", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], Media_Dto.prototype, "video_gallery", void 0);
class Socials_Dto {
}
exports.Socials_Dto = Socials_Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Socials_Dto.prototype, "facebook", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Socials_Dto.prototype, "twitter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Socials_Dto.prototype, "instagram", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Socials_Dto.prototype, "youtube", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Socials_Dto.prototype, "tiktok", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Socials_Dto.prototype, "linkedin", void 0);
class Update_Profile_Dto extends (0, mapped_types_1.PartialType)(create_profile_dto_1.Create_Profile_Dto) {
}
exports.Update_Profile_Dto = Update_Profile_Dto;
__decorate([
    (0, class_validator_1.IsUUID)(4),
    __metadata("design:type", String)
], Update_Profile_Dto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], Update_Profile_Dto.prototype, "artistic_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Update_Profile_Dto.prototype, "bio_short", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], Update_Profile_Dto.prototype, "profile_pic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], Update_Profile_Dto.prototype, "cover_pic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Credentials_Dto),
    __metadata("design:type", Credentials_Dto)
], Update_Profile_Dto.prototype, "credentials", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Media_Dto),
    __metadata("design:type", Media_Dto)
], Update_Profile_Dto.prototype, "media", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Socials_Dto),
    __metadata("design:type", Socials_Dto)
], Update_Profile_Dto.prototype, "socials", void 0);
//# sourceMappingURL=update-profile.dto.js.map