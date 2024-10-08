import { SchemaKey_I } from "../../../core/interfaces";
import { MetaRole_I } from "./metaRole";


export const voiceSpecialty_default = [
    "singer_specialty_opera",
    "singer_specialty_zarzuela",
    "singer_specialty_oratory",
    "singer_specialty_sinfonyc_repertoire",
    "singer_specialty_lyric_recitals",
    "singer_specialty_lyric_galas",
] as const;
export type Singer_voiceSpecialty_Type = typeof voiceSpecialty_default[number];

export const voiceType_default = [
    "singer_voice_type_coloratura_soprano",
    "singer_voice_type_lyric_soprano",
    "singer_voice_type_light_soprano",
    "singer_voice_type_light_lyric_soprano",
    "singer_voice_type_lyric_spinto_soprano",
    "singer_voice_type_dramatic_soprano",
    "singer_voice_type_soubrette_soprano",
    "singer_voice_type_dramatic_coloratura_soprano",
    "singer_voice_type_dramatic_soprano",
    "singer_voice_type_falcon_soprano",
    "singer_voice_type_light_mezzosoprano",
    "singer_voice_type_lyric_mezzosoprano",
    "singer_voice_type_dramatic_mezzosoprano",
    "singer_voice_type_dramatic_contralto",
    "singer_voice_type_comic_contralto",
    "singer_voice_type_coloratura_contralto",
    "singer_voice_type_light_tenor",
    "singer_voice_type_light_lyric_tenor",
    "singer_voice_type_lyric_tenor",
    "singer_voice_type_lyric_spinto_tenor",
    "singer_voice_type_dramatic_tenor",
    "singer_voice_type_light_baritone",
    "singer_voice_type_lyric_baritone",
    "singer_voice_type_buffo_baritone",
    "singer_voice_type_dramatic_baritone",
    "singer_voice_type_bass_baritone",
    "singer_voice_type_light_bass",
    "singer_voice_type_buffo_bass",
    "singer_voice_type_deep_bass",
] as const;
export type Singer_voiceType_Type = typeof voiceType_default[number];

export interface SingerSkills_I {
    voice_specialty: Singer_voiceSpecialty_Type[];
    voice_type: Singer_voiceType_Type[];
}

export const SD_repertoire_default = [
    "SD_repertoire_german",
    "SD_repertoire_french",
    "SD_repertoire_italian",
    "SD_repertoire_latinamerican",
    "SD_repertoire_northamerican",
    "SD_repertoire_russian",
    "SD_repertoire_others"
] as const;
export type SD_Repertoire_Type = typeof SD_repertoire_default[number];

export const SD_specialty_default = [
    "SD_specialty_broadway",
    "SD_specialty_concerts_galas",
    "SD_specialty_opera",
    "SD_specialty_operetta",
    "SD_specialty_zarzuela",
    "SD_specialty_others",
] as const;
export type SD_specialty_Type = typeof SD_specialty_default[number];

export interface Scene_Director_Skills_I {
    repertoire: SD_Repertoire_Type[];
    specialty: SD_specialty_Type[];
}

export const DO_repertoire_default = [
    "DO_repertoire_german",
    "DO_repertoire_french",
    "DO_repertoire_italian",
    "DO_repertoire_latinamerican",
    "DO_repertoire_northamerican",
    "DO_repertoire_russian",
    "DO_repertoire_others",
] as const;
export type DO_Repertoire_Type = typeof DO_repertoire_default[number];

export const DO_specialty_default = [
    "DO_specialty_broadway",
    "DO_specialty_sinfonic_concerts",
    "DO_specialty_lyric_galas",
    "DO_specialty_opera",
    "DO_specialty_operetta",
    "DO_specialty_sinfonic_fusions",
    "DO_specialty_zarzuela",
    "DO_specialty_others",
] as const;
export type DO_Specialty_Type = typeof DO_specialty_default[number];

export interface Orchest_Director_Skills_I {
    repertoire: DO_Repertoire_Type[];
    specialty: DO_Specialty_Type[];
}

export const Instrumentist_specialty_default = [
    "specialty_symphonicOrchestra",
    "specialty_chamberMusic"
] as const;
export type Instrumentist_Specialty_Type = typeof Instrumentist_specialty_default[number];

export const Instrumentist_position_default = [
    "position_orchestraMember",
    "position_solist",
] as const;
export type Instrumentist_Position_Type = typeof Instrumentist_position_default[number];

const Inst_windMetalCategory_default = [
    "instrument_wind_metal_frenchHorn",
    "instrument_wind_metal_euphonium",
    "instrument_wind_metal_clarinet",
    "instrument_wind_metal_trombone",
    "instrument_wind_metal_bassTrombone",
    "instrument_wind_metal_trumpet",
    "instrument_wind_metal_tuba",
    "instrument_wind_metal_others",
] as const;
export type Inst_windMetalCategory_Type = typeof Inst_windMetalCategory_default[number];

const Inst_windWoodCategory_default = [
    "instrument_wind_wood_accordion",
    "instrument_wind_wood_harmonium",
    "instrument_wind_wood_harmonica",
    "instrument_wind_wood_bansuri",
    "instrument_wind_wood_bandoneon",
    "instrument_wind_wood_clarinet",
    "instrument_wind_wood_claron",
    "instrument_wind_wood_englishHorn",
    "instrument_wind_wood_contrafagot",
    "instrument_wind_wood_fagot",
    "instrument_wind_wood_pan_flute",
    "instrument_wind_wood_sweet_flute",
    "instrument_wind_wood_ireland_flute",
    "instrument_wind_wood_transverse_flute",
    "instrument_wind_wood_",
    "instrument_wind_wood_bagpipe",
    "instrument_wind_wood_melodic",
    "instrument_wind_wood_oboe",
    "instrument_wind_wood_ocarina",
    "instrument_wind_wood_quena",
    "instrument_wind_wood_sax",
    "instrument_wind_wood_others",
] as const;
export type Inst_windWoodCategory_Type = typeof Inst_windWoodCategory_default[number];

const Inst_percusionCategory_default = [
    "instrument_percussion_arab",
    "instrument_percussion_brazilian",
    "instrument_percussion_cuban",
    "instrument_percussion_folk",
    "instrument_percussion_hindu",
    "instrument_percussion_latin",
    "instrument_percussion_oriental",
    "instrument_percussion_symphonic",
    "instrument_percussion_piano",
    "instrument_percussion_marimba",
    "instrument_percussion_vibraphone",
    "instrument_percussion_xylophone",
    "instrument_percussion_timpani",
] as const;
export type Inst_percusionCategory_Type = typeof Inst_percusionCategory_default[number];

const Inst_electricalCategory_default = [
    "instrument_electrical_bass",
    "instrument_electrical_guitar",
    "instrument_electrical_piano",
    "instrument_electrical_synthesizer",
    "instrument_electrical_violin",
] as const;
export type Inst_electricalCategory_Type = typeof Inst_electricalCategory_default[number];

const Inst_stringCategory_default = [
    "instrument_string_harp",
    "instrument_string_classicGuitar",
    "instrument_string_bass",
    "instrument_string_viola",
    "instrument_string_violin",
    "instrument_string_cello",
    "instrument_string_others",
] as const;
export type Inst_stringCategory_Type = typeof Inst_stringCategory_default[number];

export const Instrumentist_categories_default = [
    ...Inst_windMetalCategory_default,
    ...Inst_windWoodCategory_default,
    ...Inst_percusionCategory_default,
    ...Inst_electricalCategory_default,
    ...Inst_stringCategory_default
] as const;
export type Instrumentist_Categories_Type = typeof Instrumentist_categories_default[number];

export interface Instrumentist_Model_I {
    specialty: Instrumentist_Specialty_Type[];
    position: Instrumentist_Position_Type[];
    categories: Instrumentist_Categories_Type[];
}

export interface Meta_Artist_I extends SchemaKey_I {

    skills: {
        singer?: SingerSkills_I,
        instrumentist?: Instrumentist_Model_I,
        orquests_director?: Orchest_Director_Skills_I,
        scenes_director?: Scene_Director_Skills_I,
    },
    meta_role: MetaRole_I | string;
    updated_at?: Date;

}

export const typeArtist_Type_default = [
    "all",
    "singer",
    "instrumentist",
    "orchestra_director",
    "scene_director",
] as const;
export type userArtist_Type = typeof typeArtist_Type_default[number];

export enum Artist_Enum {
    SINGER = "SINGER",
    INSTRUMENTIST = "INSTRUMENTIST",
    ORQUESTA_DIRECTOR = "ORQUESTA_DIRECTOR",
    SCENE_DIRECTOR = "SCENE_DIRECTOR",
    ALL = "ALL",
}
