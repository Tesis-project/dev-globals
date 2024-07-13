
import { User_I } from ".";
import { SchemaKey_I } from "../../../core/interfaces";


export interface User_HiringData_I extends SchemaKey_I {
    personal: User_Personal_Data_I;
    payment_accounts: Payment_Account_I[];
    user: User_I | string;
}


export interface User_Personal_Data_I extends SchemaKey_I {
    address?: string;
    city?: string;
    phone?: string;
    postal_code?: string;
    rif?: string;
    social_reason?: string;
    state?: string;
    updated_at?: Date;
}

export enum Banks_Enum {
    BC_BICENTENARIO = "BC_BICENTENARIO",
    BC_BANESCO = "BC_BANESCO",
    BC_TESORO = "BC_TESORO",
    BC_PROVINCIAL = "BC_PROVINCIAL",
    BC_MERCANTIL = "BC_MERCANTIL",
    BC_VENEZUELA = "BC_VENEZUELA",
}

export enum Payment_Type_Enum {
    BANK_ACCOUNT = "BANK_ACCOUNT",
    MOBILE_PAYMENT = "MOBILE_PAYMENT",
}

export interface Payment_Account_I extends SchemaKey_I {
    type: Payment_Type_Enum;
    bank_name: Banks_Enum;
    number: string;
    titular: string;
    person_id: string;
    phone: string;
    created_at?: Date;
    updated_at?: Date;
}

