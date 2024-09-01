import { Currency_Enum } from '../../../../core/interfaces';
import { Vacant_Transport_Enum, Vacant_Housing_Enum } from '../interfaces';
import { Artist_Enum } from '../../../profile/interfaces';
declare class Vacant_Transport_Dto {
    enable: boolean;
    type: Vacant_Transport_Enum;
    desc?: string;
}
declare class Vacant_Housing_Dto {
    enable: boolean;
    type: Vacant_Housing_Enum;
    desc?: string;
}
declare class Vacant_Budget_Costs_Dto {
    enable: boolean;
    desc?: string;
    total: number;
    currency: Currency_Enum;
}
declare class Vacant_Budget_Payment_Dto {
    total: number;
    currency: Currency_Enum;
}
declare class Vacant_Operation_Dto {
    start_at: Date;
    end_at: Date;
}
declare class Direction_Dto {
    address: string;
    city: string;
    state: string;
}
export declare class Create_Vacant_Dto {
    title: string;
    desc: string;
    operation: Vacant_Operation_Dto;
    role_desc: string;
    role_type: Artist_Enum[];
    transport_service: Vacant_Transport_Dto;
    housing_service: Vacant_Housing_Dto;
    vacant_costs: Vacant_Budget_Costs_Dto;
    vacant_payment: Vacant_Budget_Payment_Dto;
    direction: Direction_Dto;
    specific_conditions: string;
}
export {};
