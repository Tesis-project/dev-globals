import { SchemaKey_I } from "../../../core/interfaces";
import { Auth_I } from "./auth";
export declare enum RequestType_Enum {
    CONFIRM_ACCOUNT = "CONFIRM_ACCOUNT",
    RESET_PASSWORD = "RESET_PASSWORD",
    CHANGE_EMAIL = "CHANGE_EMAIL"
}
export interface Requests_I extends SchemaKey_I {
    type: RequestType_Enum;
    key: string;
    auth: Auth_I | string;
    detail?: string;
    created_at?: Date;
    used_at?: Date;
}
