import { Auth_I } from "./auth";
import { SchemaKey_I } from "./common";
import { User_HiringData_I } from "./hiringData";
import { Profile_I } from "./profile";
export declare enum Gender_Enum {
    MALE = "MALE",
    FEMALE = "FEMALE",
    NONE = "NONE"
}
export interface User_I extends SchemaKey_I {
    name: string;
    last_name: string;
    gender?: Gender_Enum;
    phone?: string;
    direction?: {
        adress?: string;
        city?: string;
        state?: string;
    };
    auth?: Auth_I;
    profile?: Profile_I;
    hiring_data?: User_HiringData_I;
}
