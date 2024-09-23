@startuml

title Auth-MS - Diagrama de clases - Estructura de datos

enum AuthStatus_Enum {
    NONE
    VERIFIED
    NOT
    BLOCKED
    DELETED
    SUSPENDED
    PENDING
    ACTIVE
    INACTIVE
}

enum User_Role_Enum {
    ARTIST_ROLE
    CONTRATIST_ROLE
    ADMIN_ROLE
}

enum RequestType_Enum {
    CONFIRM_ACCOUNT
    RESET_PASSWORD
    CHANGE_EMAIL
}

enum RequestStatus_Enum {
    PENDING
    USED
    EXPIRED
}

class Auth_I {
        + _id: string
    + email: string
    + password: string
    + username: string
    + created_at?: Date
    + updated_at?: Date
    + last_session: Date
    + status?: AuthStatus_Enum
    + role: User_Role_Enum
    + user: User_I | string
    + requests?: Requests_I[*]
}

interface Session_Auth_I {
    + email: string
    + created_at: Date
    + status: string
    + user: string
    + role: User_Role_Enum
    + token: string
}

class Requests_I {
        + _id: string
    + type: RequestType_Enum
    + key: string
    + status: RequestStatus_Enum
    + auth: Auth_I | string
    + detail?: string
    + created_at?: Date
    + used_at?: Date
}

Auth_I --> AuthStatus_Enum
Auth_I --> User_Role_Enum
Auth_I --> "0..*" Requests_I
Requests_I --> RequestType_Enum
Requests_I --> RequestStatus_Enum
Requests_I --> Auth_I
Session_Auth_I --> User_Role_Enum
Auth_I --> User_I


note bottom of User_I
    Representa la clase User_I
    del Estructura de datos
    perteneciente a User-MS
end note

@enduml


<!-- User MS -->

@startuml

title User-MS - Diagrama de clases - Estructura de datos

enum Gender_Enum {
    MALE
    FEMALE
    NONE
}

enum Banks_Enum {
    BC_BICENTENARIO
    BC_BANESCO
    BC_TESORO
    BC_PROVINCIAL
    BC_MERCANTIL
    BC_VENEZUELA
}

enum Payment_Type_Enum {
    BANK_ACCOUNT
    MOBILE_PAYMENT
}

class User_I {
    + _id: string
    + name: string
    + last_name: string
    + gender?: Gender_Enum
    + phone?: string
    + direction?: Direction_I
    + auth: Auth_I | string
    + profile: Profile_I | string
    + hiring_data: User_HiringData_I | string
    + updated_at?: Date
}

class Direction_I {
    + address?: string
    + city?: string
    + state?: string
}

class User_HiringData_I {
    + _id: string
    + personal: User_Personal_Data_I
    + payment_accounts: Payment_Account_I[*]
    + user: User_I | string
}

class User_Personal_Data_I {
    + _id: string
    + address?: string
    + city?: string
    + phone?: string
    + postal_code?: string
    + rif?: string
    + social_reason?: string
    + specific_conditions?: string
    + state?: string
    + updated_at?: Date
}

class Payment_Account_I {
    + _id: string
    + type: Payment_Type_Enum
    + bank_name: Banks_Enum
    + number: string
    + titular: string
    + person_id: string
    + phone: string
    + created_at?: Date
    + updated_at?: Date
}

User_I --> Gender_Enum
User_I --> Auth_I
User_I --> Profile_I
User_I --> User_HiringData_I
User_I --> Direction_I

User_HiringData_I --> User_Personal_Data_I
User_HiringData_I --> "0..*" Payment_Account_I

Payment_Account_I --> Payment_Type_Enum
Payment_Account_I --> Banks_Enum


note bottom of Auth_I
    Representa la clase Auth_I
    del Estructura de datos
    perteneciente a Auth-MS
end note

note bottom of Profile_I
    Representa la clase Profile_I
    del Estructura de datos
    perteneciente a Profile-MS
end note


@enduml


<!--  -->

<!-- Profile MS -->
@startuml
title Profile-MS - Diagrama de clases - Estructura de datos 01

class Profile_I {
    + _id: string
    + artistic_name?: string
    + bio_short?: string
    + profile_pic?: Media_I
    + cover_pic?: Media_I
    + credentials?: Credentials_I
    + media?: MediaGallery_I
    + socials?: Socials_I
    + user: User_I | string
    + meta: MetaRole_I | string
    + updated_at?: Date
}

class MetaRole_I {
    + _id: string
    + meta_artist?: Meta_Artist_I | string
    + meta_contratist?: Meta_Contratist_I | string
    + profile?: Profile_I | string
}

class Meta_Contratist_I {
    + _id: string
    + institutes_companies: InstitutesCompanies_I
    + meta_role: MetaRole_I | string
    + updated_at?: Date
}

interface InstitutesCompanies_I {
    + name: string
    + rif_nif: string
    + position: string
    + phone: string
    + direction?: Address_I
}

interface Address_I {
    + address: string
    + city: string
    + state: string
}

interface Credentials_I {
    + identity_file?: Media_I
    + profesional_file?: Media_I
}

interface MediaGallery_I {
    + image_gallery?: Media_I[*]
    + video_gallery?: Media_I[*]
}

interface Socials_I {
    + facebook?: string
    + twitter?: string
    + instagram?: string
    + youtube?: string
    + tiktok?: string
    + linkedin?: string
}

Profile_I --> Media_I
Profile_I --> Credentials_I
Profile_I --> MediaGallery_I
Profile_I --> Socials_I
Profile_I --> User_I
Profile_I --> MetaRole_I
MetaRole_I --> Meta_Contratist_I
MetaRole_I --> Meta_Artist_I
Meta_Contratist_I --> InstitutesCompanies_I
InstitutesCompanies_I --> Address_I
MediaGallery_I --> "0..*" Media_I

note top of Meta_Artist_I
    Presente en Estructura de datos 02
end note

note right of Media_I
    Representa la clase Media_I
    de la estructura de datos
    perteneciente a Media-MS
end note

note right of User_I
    Representa la clase User_I
    de la estructura de datos
    perteneciente a User-MS
end note

@enduml

<!-- Part 2 -->

@startuml

title Profile-MS - Diagrama de clases - Estructura de datos 02

interface SingerSkills_I {
    + voice_specialty: Singer_voiceSpecialty_Type[*]
    + voice_type: Singer_voiceType_Type[*]
}

interface Scene_Director_Skills_I {
    + repertoire: SD_Repertoire_Type[*]
    + specialty: SD_specialty_Type[*]
}

interface Orchest_Director_Skills_I {
    + repertoire: DO_Repertoire_Type[*]
    + specialty: DO_Specialty_Type[*]
}

interface Instrumentist_Model_I {
    + specialty: Instrumentist_Specialty_Type[*]
    + position: Instrumentist_Position_Type[*]
    + categories: Instrumentist_Categories_Type[*]
}

interface Meta_Artist_I {
    + skills: Skills_I
    + meta_role: MetaRole_I | string
    + updated_at?: Date
}

interface Skills_I {
    + singer?: SingerSkills_I
    + instrumentist?: Instrumentist_Model_I
    + orquests_director?: Orchest_Director_Skills_I
    + scenes_director?: Scene_Director_Skills_I
}

Meta_Artist_I --> Skills_I
Skills_I --> SingerSkills_I
Skills_I --> Instrumentist_Model_I
Skills_I --> Orchest_Director_Skills_I
Skills_I --> Scene_Director_Skills_I
SingerSkills_I --> "0..*" Singer_voiceSpecialty_Type
SingerSkills_I --> "0..*" Singer_voiceType_Type
Scene_Director_Skills_I --> "0..*" SD_Repertoire_Type
Scene_Director_Skills_I --> "0..*" SD_specialty_Type
Orchest_Director_Skills_I --> "0..*" DO_Repertoire_Type
Orchest_Director_Skills_I --> "0..*" DO_Specialty_Type
Instrumentist_Model_I --> "0..*" Instrumentist_Specialty_Type
Instrumentist_Model_I --> "0..*" Instrumentist_Position_Type
Instrumentist_Model_I --> "0..*" Instrumentist_Categories_Type

@enduml

<!-- Part 03 -->

@startuml

title Profile-MS - Diagrama de clases - Estructura de datos 03

enum Singer_voiceSpecialty_Type {
    singer_specialty_opera
    singer_specialty_zarzuela
    singer_specialty_oratory
    singer_specialty_sinfonyc_repertoire
    singer_specialty_lyric_recitals
    singer_specialty_lyric_galas
}

enum Singer_voiceType_Type {
    singer_voice_type_coloratura_soprano
    singer_voice_type_lyric_soprano
    singer_voice_type_light_soprano
    singer_voice_type_light_lyric_soprano
    singer_voice_type_lyric_spinto_soprano
    singer_voice_type_dramatic_soprano
    singer_voice_type_soubrette_soprano
    singer_voice_type_dramatic_coloratura_soprano
    singer_voice_type_dramatic_soprano
    singer_voice_type_falcon_soprano
    singer_voice_type_light_mezzosoprano
    singer_voice_type_lyric_mezzosoprano
    singer_voice_type_dramatic_mezzosoprano
    singer_voice_type_dramatic_contralto
    singer_voice_type_comic_contralto
    singer_voice_type_coloratura_contralto
    singer_voice_type_light_tenor
    singer_voice_type_light_lyric_tenor
    singer_voice_type_lyric_tenor
    singer_voice_type_lyric_spinto_tenor
    singer_voice_type_dramatic_tenor
    singer_voice_type_light_baritone
    singer_voice_type_lyric_baritone
    singer_voice_type_buffo_baritone
    singer_voice_type_dramatic_baritone
    singer_voice_type_bass_baritone
    singer_voice_type_light_bass
    singer_voice_type_buffo_bass
    singer_voice_type_deep_bass
}

enum SD_Repertoire_Type {
    SD_repertoire_german
    SD_repertoire_french
    SD_repertoire_italian
    SD_repertoire_latinamerican
    SD_repertoire_northamerican
    SD_repertoire_russian
    SD_repertoire_others
}

enum SD_specialty_Type {
    SD_specialty_broadway
    SD_specialty_concerts_galas
    SD_specialty_opera
    SD_specialty_operetta
    SD_specialty_zarzuela
    SD_specialty_others
}

enum DO_Repertoire_Type {
    DO_repertoire_german
    DO_repertoire_french
    DO_repertoire_italian
    DO_repertoire_latinamerican
    DO_repertoire_northamerican
    DO_repertoire_russian
    DO_repertoire_others
}

enum DO_Specialty_Type {
    DO_specialty_broadway
    DO_specialty_sinfonic_concerts
    DO_specialty_lyric_galas
    DO_specialty_opera
    DO_specialty_operetta
    DO_specialty_sinfonic_fusions
    DO_specialty_zarzuela
    DO_specialty_others
}

enum Instrumentist_Specialty_Type {
    specialty_symphonicOrchestra
    specialty_chamberMusic
}

enum Instrumentist_Position_Type {
    position_orchestraMember
    position_solist
}

enum Instrumentist_Categories_Type {
    instrument_wind_metal_frenchHorn
    instrument_wind_metal_euphonium
    instrument_wind_metal_clarinet
    instrument_wind_metal_trombone
    instrument_wind_metal_bassTrombone
    instrument_wind_metal_trumpet
    instrument_wind_metal_tuba
    instrument_wind_metal_others
    instrument_wind_wood_accordion
    instrument_wind_wood_harmonium
    instrument_wind_wood_harmonica
    instrument_wind_wood_bansuri
    instrument_wind_wood_bandoneon
    instrument_wind_wood_clarinet
    instrument_wind_wood_claron
    instrument_wind_wood_englishHorn
    instrument_wind_wood_contrafagot
    instrument_wind_wood_fagot
    instrument_wind_wood_pan_flute
    instrument_wind_wood_sweet_flute
    instrument_wind_wood_ireland_flute
    instrument_wind_wood_transverse_flute
    instrument_wind_wood_
    instrument_wind_wood_bagpipe
    instrument_wind_wood_melodic
    instrument_wind_wood_oboe
    instrument_wind_wood_ocarina
    instrument_wind_wood_quena
    instrument_wind_wood_sax
    instrument_wind_wood_others
    instrument_percussion_arab
    instrument_percussion_brazilian
    instrument_percussion_cuban
    instrument_percussion_folk
    instrument_percussion_hindu
    instrument_percussion_latin
    instrument_percussion_oriental
    instrument_percussion_symphonic
    instrument_percussion_piano
    instrument_percussion_marimba
    instrument_percussion_vibraphone
    instrument_percussion_xylophone
    instrument_percussion_timpani
    instrument_electrical_bass
    instrument_electrical_guitar
    instrument_electrical_piano
    instrument_electrical_synthesizer
    instrument_electrical_violin
    instrument_string_harp
    instrument_string_classicGuitar
    instrument_string_bass
    instrument_string_viola
    instrument_string_violin
    instrument_string_cello
    instrument_string_others
}

@enduml


<!-- Notifications -->

@startuml

title Notifications-MS - Diagrama de clases - Estructura de datos

enum NotificationState_Enum {
    READ
    UNREAD
}

class Notifications_I {
    + _id: string
    + state: NotificationState_Enum
    + subject: string
    + message: string
    + user: User_I | string
    + created_at?: Date
    + read_at?: Date
}

Notifications_I --> NotificationState_Enum
Notifications_I --> User_I

note bottom of User_I
    Representa la clase User_I
    de la estructura de datos
    perteneciente a User-MS
end note

@enduml


<!-- MEDIA MS -->

@startuml

title Media-MS - Diagrama de clases - Estructura de datos

enum Media_Format_Enum {
    JPG
    JPEG
    PNG
    MP4
    PDF
    DOC
    DOCX
}

enum Media_Reference_Enum {
    PROFILE_PROFILE_PIC
    PROFILE_COVER_PIC
    PROFILE_CREDENTIAL_IDENTITY
    PROFILE_CREDENTIAL_PROFESSIONAL
    PROFILE_MEDIA_VIDEO_GALLERY
    PROFILE_MEDIA_IMAGE_GALLERY
    VACANT_PIC
    VACANT_CONTRACT_DOCUMENT
}

enum Media_Type_Enum {
    IMAGE
    VIDEO
    DOCUMENT
}

class Media_I {
    + _id: string
    + file?: string
    + folder?: string
    + format?: Media_Format_Enum
    + type?: Media_Type_Enum
    + reference?: Media_Reference_Enum
    + reference_id?: string
    + src?: string
    + user?: User_I | string
    + cloud_file_id?: string
    + updated_at?: Date
}

Media_I --> Media_Format_Enum
Media_I --> Media_Type_Enum
Media_I --> Media_Reference_Enum
Media_I --> User_I


@enduml


<!-- Business MS -->

@startuml

title Business-MS - Diagrama de clases - Estructura de datos 01

enum Vacants_Enum {
    OPEN
    CLOSED
    EXPIRED
    INPROGRESS
}

enum Vacant_Transport_Enum {
    LAND
    AIR
}

enum Vacant_Housing_Enum {
    APARTMENT
    HOUSE
    ROOM
    HOTEL
    SHARED
}

enum Vacant_Postulation_Status_Enum {
    SENDED
    ON_HOLD
    ACCEPTED
    CONTRACT_SENT
    REFUSED
}

class Vacant_I {
    + _id: string
    + vacant_pic?: Media_I
    + status: Vacants_Enum
    + title: string
    + desc: string
    + operation: Operation_I
    + role_desc: string
    + role_type: Artist_Enum[*]
    + transport_service?: Vacant_Transport_I
    + housing_service?: Vacant_Housing_I
    + vacant_costs?: Vacant_Budget_Costs_I
    + vacant_payment: Vacant_Budget_Payment_I
    + direction?: Address_I
    + specific_conditions?: string
    + owner: User_I | string
    + postulations?: Vacant_Postulation_I[*]
    + contract?: Contract_I | string
    + created_at?: Date
    + updated_at?: Date
}

interface Operation_I {
    + start_at: Date
    + end_at: Date
}

interface Address_I {
    + address?: string
    + city?: string
    + state?: string
}

interface Vacant_Transport_I {
    + enable: boolean
    + type: Vacant_Transport_Enum
    + desc?: string
}

interface Vacant_Housing_I {
    + enable: boolean
    + type: Vacant_Housing_Enum
    + desc?: string
}

interface Vacant_Budget_Costs_I {
    + enable: boolean
    + desc?: string
    + total: number
    + currency: Currency_Enum
}

interface Vacant_Budget_Payment_I {
    + total: number
    + currency: Currency_Enum
}

enum Currency_Enum {

    USD="USD",
    BS="BS",

}

class Vacant_Postulation_I {
    + _id: string
    + user_postulate: User_I | string
    + comment?: string
    + created_at?: Date
    + updated_at?: Date
    + status: Vacant_Postulation_Status_Enum
    + owner_comment?: string
    + vacant: Vacant_I | string
}

Vacant_I --> Media_I
Vacant_I --> Contract_I
Vacant_I --> Operation_I
Vacant_I --> Address_I
Vacant_I --> Vacants_Enum
Vacant_I --> Vacant_Transport_I
Vacant_I --> Vacant_Housing_I
Vacant_I --> Vacant_Budget_Costs_I
Vacant_I --> Vacant_Budget_Payment_I
Vacant_I --> "0..*" Vacant_Postulation_I
Vacant_I --> User_I
Vacant_Budget_Costs_I --> Currency_Enum
Vacant_Budget_Payment_I --> Currency_Enum
Vacant_Transport_I --> Vacant_Transport_Enum
Vacant_Housing_I --> Vacant_Housing_Enum
Vacant_Postulation_I --> Vacant_Postulation_Status_Enum
Vacant_Postulation_I --> Vacant_I
Vacant_Postulation_I --> User_I

note bottom of User_I
    Representa la clase User_I
    de la estructura de datos
    perteneciente a User-MS
end note

note bottom of Media_I
    Representa la clase Media_I
    de la estructura de datos
    perteneciente a Media-MS
end note

note bottom of Contract_I
    Presente en la estructura de datos 02
end note

@enduml


@startuml

title Business-MS - Diagrama de clases - Estructura de datos 02

enum Contract_Details_Status_Payment_Enum {
    PENDING
    PAID
    CANCELED
}

enum Contract_Status_Enum {
    PLANNING
    SINGS_PENDING
    IN_PROGRESS
    CANCELLED
    COMPLETED
}

class Contract_I {
    + _id: string
    + contratist: Contract_Sign_I
    + contractor: Contract_Sign_I
    + vacant: Vacant_I | string
    + details?: Contract_Details_I
    + status: Contract_Status_Enum
    + created_at?: Date
    + updated_at?: Date
}

interface Contract_Sign_I {
    + signed: boolean
    + signed_at?: Date
    + user: User_I | string
}

interface Contract_Details_I {
    + payment_info?: Payment_Account_I
    + status_payment?: Contract_Details_Status_Payment_Enum
    + payment_at?: Date
}

Contract_I --> Contract_Sign_I
Contract_I --> Vacant_I
Contract_I --> Contract_Details_I
Contract_Sign_I --> User_I
Contract_Details_I --> Payment_Account_I
Contract_Details_I --> Contract_Details_Status_Payment_Enum

note bottom of Vacant_I
   Presente en la estructura de datos 01
end note

note bottom of User_I
    Representa la clase User_I
    de la estructura de datos
    perteneciente a User-MS
end note

note bottom of Payment_Account_I
    Representa la clase Payment_Account_I
    de la estructura de datos
    perteneciente a User-MS
end note


@enduml
