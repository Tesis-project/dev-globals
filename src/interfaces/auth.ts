import { SchemaKey_I } from "./common";



export enum AuthStatus_Enum {
    NONE = "NONE",
    VERIFIED = "VERIFIED",
    NOT = "NOT",
    BLOCKED = "BLOCKED",
    DELETED = "DELETED",
    SUSPENDED = "SUSPENDED",
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}


export interface Auth_I extends SchemaKey_I {

    email: string;
    password: string;
    username: string;

    created_at: Date;
    updated_at: Date;
    last_session: Date;

    status?: AuthStatus_Enum;

}