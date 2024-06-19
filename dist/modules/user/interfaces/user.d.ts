import { SchemaKey_I } from "../../../interfaces/common";
import { Auth_I } from "../../auth/interfaces";
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
}
