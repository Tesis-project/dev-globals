import { DO_Repertoire_Type, DO_Specialty_Type, Instrumentist_Categories_Type, Instrumentist_Position_Type, Instrumentist_Specialty_Type, SD_Repertoire_Type, SD_specialty_Type, Singer_voiceSpecialty_Type, Singer_voiceType_Type } from '../interfaces/artists-skills';
export declare class Singer_Dto {
    voice_specialty: Singer_voiceSpecialty_Type[];
    voice_type: Singer_voiceType_Type[];
}
declare class Instrumentist_Dto {
    specialty: Instrumentist_Specialty_Type[];
    position: Instrumentist_Position_Type[];
    categories: Instrumentist_Categories_Type[];
}
declare class Orquests_director_Dto {
    repertoire: DO_Repertoire_Type[];
    specialty: DO_Specialty_Type[];
}
declare class Scenes_director_Dto {
    repertoire: SD_Repertoire_Type[];
    specialty: SD_specialty_Type[];
}
declare class Skills_Dto {
    singer?: Singer_Dto;
    instrumentist?: Instrumentist_Dto;
    orquests_director?: Orquests_director_Dto;
    scenes_director?: Scenes_director_Dto;
}
export declare class Update_Meta_Artist_Dto {
    skills: Skills_Dto;
}
export {};
