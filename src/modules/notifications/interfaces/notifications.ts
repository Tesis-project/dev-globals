

import { SchemaKey_I } from "../../../core/interfaces";
import { User_I } from "../../user/interfaces";



export enum NotificationState_Enum {
    READ = "READ",
    UNREAD = "UNREAD",
}

export interface Notifications_I extends SchemaKey_I {

    state: NotificationState_Enum;
    subject: string;
    message: string;
    user: User_I | string;
    created_at?: Date;
    read_at?: Date;

}