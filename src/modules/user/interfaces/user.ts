import { SchemaKey_I } from "../../../core/interfaces/common";
import { Auth_I } from "../../auth/interfaces";
import { Profile_I } from "../../profile/interfaces";
import { User_HiringData_I } from "./hiring-data";


export enum Gender_Enum {
    MALE = "MALE",
    FEMALE = "FEMALE",
    NONE = "NONE",
}

export interface User_I extends SchemaKey_I{
    name: string;
    last_name: string;
    gender?: Gender_Enum;
    phone?: string;
    direction?: {
        adress?: string;
        city?: string;
        state?: string;
    }
    auth?: Auth_I | string;
    profile?: Profile_I | string;

    hiring_data?: User_HiringData_I;

    updated_at?: Date;
}
