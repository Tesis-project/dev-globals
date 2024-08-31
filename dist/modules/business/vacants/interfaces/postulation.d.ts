import { SchemaKey_I } from "../../../../core/interfaces";
import { User_I } from "../../../user/interfaces";
import { Vacant_I } from "./vacants";
export declare enum Vacant_Postulation_Status_Enum {
    SENDED = "SENDED",
    ON_HOLD = "ON_HOLD",
    ACCEPTED = "ACCEPTED",
    CONTRACT_SENT = "CONTRACT_SENT",
    REFUSED = "REFUSED"
}
export interface Vacant_Postulation_I extends SchemaKey_I {
    user_postulate: User_I | string;
    comment?: string;
    created_at?: Date;
    updated_at?: Date;
    status: Vacant_Postulation_Status_Enum;
    owner_comment?: string;
    vacant: Vacant_I | string;
}
