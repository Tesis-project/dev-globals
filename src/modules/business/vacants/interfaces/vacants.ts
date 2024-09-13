import { Currency_Enum, SchemaKey_I } from "../../../../core/interfaces";
import { Media_I } from "../../../media/interfaces";
import { Artist_Enum } from "../../../profile/interfaces";
import { User_I } from "../../../user/interfaces";
import { Vacant_Postulation_I } from "./postulation";


export enum Vacants_Enum {

    OPEN = "OPEN",
    CLOSED = "CLOSED",
    EXPIRED = "EXPIRED",
    INPROGRESS = "INPROGRESS",

}

export enum Vacant_Transport_Enum {
    LAND = "LAND",
    AIR = "AIR",
}
export enum Vacant_Housing_Enum {
    APARTMENT = "APARTMENT",
    HOUSE = "HOUSE",
    ROOM = "ROOM",
    HOTEL = "HOTEL",
    SHARED = "SHARED",
}

export interface Vacant_I extends SchemaKey_I {


    vacant_pic?: Media_I;
    status: Vacants_Enum;

    title: string;
    desc: string;
    operation: {
        start_at: Date;
        end_at: Date;
    };

    role_desc: string;
    role_type: Artist_Enum[];

    transport_service?: Vacant_Transport_I;
    housing_service?: Vacant_Housing_I;
    vacant_costs?: Vacant_Budget_Costs_I;

    vacant_payment: Vacant_Budget_Payment_I;

    direction?: {
        address?: string;
        city?: string;
        state?: string;
    };

    specific_conditions?: string;

    owner: User_I | string;
    postulations?: Vacant_Postulation_I[]
    contract?: any | string;

    created_at?: Date;
    updated_at?: Date;


}

export interface Vacant_Transport_I {

    enable: boolean;
    type: Vacant_Transport_Enum;
    desc?: string;

}

export interface Vacant_Housing_I {

    enable: boolean;
    type: Vacant_Housing_Enum;
    desc?: string;

}

export interface Vacant_Budget_Costs_I {

    enable: boolean;
    desc?: string;
    total: number;
    currency: Currency_Enum;

}

export interface Vacant_Budget_Payment_I {
    total: number;
    currency: Currency_Enum;
}
