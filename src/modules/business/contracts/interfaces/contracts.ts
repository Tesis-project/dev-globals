
import { SchemaKey_I } from "../../../../core/interfaces";
import { Payment_Account_I, User_I } from "../../../user/interfaces";
import { Vacant_I } from "../../vacants/interfaces/vacants";

export enum Contract_Details_Status_Payment_Enum {
    PENDING = "PENDING",
    PAID = "PAID",
    CANCELED = "CANCELED"
}

export enum Contract_Status_Enum {

    PLANNING = "PLANNING",
    SINGS_PENDING = "SINGS_PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"

}

export enum Contract_DetailType_Enum {

    PAYMENT_INFO="PAYMENT_INFO",
    SET_PAYMENT="SET_PAYMENT",
    CANCEL_PAYMENT="CANCEL_PAYMENT",

}

export interface Contract_Sign_I {

    signed: boolean;
    signed_at?: Date;
    user: User_I | string;

}

export interface Contract_Details_I {

    payment_info?: Payment_Account_I;
    status_payment?: Contract_Details_Status_Payment_Enum
    payment_at?: Date;

}

export interface Contract_I extends SchemaKey_I {


    contratist: Contract_Sign_I;
    contractor: Contract_Sign_I;

    vacant: Vacant_I | string;

    details?: Contract_Details_I;

    status: Contract_Status_Enum;

    created_at?: Date;
    updated_at?: Date;

}