import { Type } from "class-transformer";
import { IsArray, IsIn, IsOptional, ValidateNested } from "class-validator";
import {
    DO_repertoire_default,
    DO_Repertoire_Type,
    DO_specialty_default,
    DO_Specialty_Type,
    Instrumentist_categories_default,
    Instrumentist_Categories_Type,
    Instrumentist_position_default,
    Instrumentist_Position_Type,
    Instrumentist_specialty_default,
    Instrumentist_Specialty_Type,
    SD_repertoire_default,
    SD_Repertoire_Type,
    SD_specialty_default,
    SD_specialty_Type,
    Singer_voiceSpecialty_Type,
    Singer_voiceType_Type,
    voiceSpecialty_default,
    voiceType_default
} from '../interfaces/artists-skills';


export class Singer_Dto {

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(voiceSpecialty_default, { each: true })
    voice_specialty: Singer_voiceSpecialty_Type[];

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(voiceType_default, { each: true })
    voice_type: Singer_voiceType_Type[];

}

class Instrumentist_Dto {

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(Instrumentist_specialty_default, { each: true })
    specialty: Instrumentist_Specialty_Type[];

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(Instrumentist_position_default, { each: true })
    position: Instrumentist_Position_Type[];

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(Instrumentist_categories_default, { each: true })
    categories: Instrumentist_Categories_Type[];

}

class Orquests_director_Dto {

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(DO_repertoire_default, { each: true })
    repertoire: DO_Repertoire_Type[];

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(DO_specialty_default, { each: true })
    specialty: DO_Specialty_Type[];

}

class Scenes_director_Dto {

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(SD_repertoire_default, { each: true })
    repertoire: SD_Repertoire_Type[];

    @IsArray()
    @ValidateNested({ each: true })
    @IsIn(SD_specialty_default, { each: true })
    specialty: SD_specialty_Type[];

}

class Skills_Dto {

    @IsOptional()
    @ValidateNested()
    @Type(() => Singer_Dto)
    singer?: Singer_Dto;

    @IsOptional()
    @ValidateNested()
    @Type(() => Instrumentist_Dto)
    instrumentist?: Instrumentist_Dto;

    @IsOptional()
    @ValidateNested()
    @Type(() => Orquests_director_Dto)
    orquests_director?: Orquests_director_Dto;

    @IsOptional()
    @ValidateNested()
    @Type(() => Scenes_director_Dto)
    scenes_director?: Scenes_director_Dto;

}

export class Update_Meta_Artist_Dto {

    @ValidateNested()
    @Type(() => Skills_Dto)
    skills: Skills_Dto;

}