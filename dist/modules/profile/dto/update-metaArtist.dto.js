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
exports.Update_Meta_Artist_Dto = exports.Singer_Dto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const artists_skills_1 = require("../interfaces/artists-skills");
class Singer_Dto {
}
exports.Singer_Dto = Singer_Dto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.voiceSpecialty_default, { each: true }),
    __metadata("design:type", Array)
], Singer_Dto.prototype, "voice_specialty", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.voiceType_default, { each: true }),
    __metadata("design:type", Array)
], Singer_Dto.prototype, "voice_type", void 0);
class Instrumentist_Dto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.Instrumentist_specialty_default, { each: true }),
    __metadata("design:type", Array)
], Instrumentist_Dto.prototype, "specialty", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.Instrumentist_position_default, { each: true }),
    __metadata("design:type", Array)
], Instrumentist_Dto.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.Instrumentist_categories_default, { each: true }),
    __metadata("design:type", Array)
], Instrumentist_Dto.prototype, "categories", void 0);
class Orquests_director_Dto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.DO_repertoire_default, { each: true }),
    __metadata("design:type", Array)
], Orquests_director_Dto.prototype, "repertoire", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.DO_specialty_default, { each: true }),
    __metadata("design:type", Array)
], Orquests_director_Dto.prototype, "specialty", void 0);
class Scenes_director_Dto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.SD_repertoire_default, { each: true }),
    __metadata("design:type", Array)
], Scenes_director_Dto.prototype, "repertoire", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsIn)(artists_skills_1.SD_specialty_default, { each: true }),
    __metadata("design:type", Array)
], Scenes_director_Dto.prototype, "specialty", void 0);
class Skills_Dto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Singer_Dto),
    __metadata("design:type", Singer_Dto)
], Skills_Dto.prototype, "singer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Instrumentist_Dto),
    __metadata("design:type", Instrumentist_Dto)
], Skills_Dto.prototype, "instrumentist", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Orquests_director_Dto),
    __metadata("design:type", Orquests_director_Dto)
], Skills_Dto.prototype, "orquests_director", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Scenes_director_Dto),
    __metadata("design:type", Scenes_director_Dto)
], Skills_Dto.prototype, "scenes_director", void 0);
class Update_Meta_Artist_Dto {
}
exports.Update_Meta_Artist_Dto = Update_Meta_Artist_Dto;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Skills_Dto),
    __metadata("design:type", Skills_Dto)
], Update_Meta_Artist_Dto.prototype, "skills", void 0);
//# sourceMappingURL=update-metaArtist.dto.js.map