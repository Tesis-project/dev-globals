import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator';
import { Currency_Enum } from '../../../../core/interfaces';
import { Vacant_Transport_Enum, Vacant_Housing_Enum } from '../interfaces';
import { Artist_Enum } from '../../../profile/interfaces';

class Direction_Dto {

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

}

class Vacant_Transport_Dto {

    @IsBoolean()
    enable: boolean;

    @IsEnum(Vacant_Transport_Enum, {
        message: `Type must be one of the following values: ${{ ...Vacant_Transport_Enum }}`
    })
    type: Vacant_Transport_Enum;

    @IsOptional()
    @IsString()
    desc?: string;

}

class Vacant_Housing_Dto {

    @IsBoolean()
    enable: boolean;

    @IsEnum(Vacant_Housing_Enum, {
        message: `Type must be one of the following values: ${{ ...Vacant_Housing_Enum }}`
    })
    type: Vacant_Housing_Enum;

    @IsOptional()
    @IsString()
    desc?: string;

}

class Vacant_Budget_Costs_Dto {

    @IsBoolean()
    enable: boolean;

    @IsOptional()
    @IsString()
    desc?: string;

    @IsOptional()
    @IsNumber()
    total: number;

    @IsEnum(Currency_Enum, {
        message: `Currency must be one of the following values: ${{ ...Currency_Enum }}`
    })
    currency: Currency_Enum;

}

class Vacant_Budget_Payment_Dto {

    @IsOptional()
    @IsNumber()
    total: number;

    @IsEnum(Currency_Enum, {
        message: `Currency must be one of the following values: ${{ ...Currency_Enum }}`
    })
    currency: Currency_Enum;

}

class Vacant_Operation_Dto {

    @IsString()
    start_at: Date;

    @IsString()
    end_at: Date;

}

export class Create_Vacant_Dto {

    @IsString()
    title: string;

    @IsString()
    desc: string;

    @ValidateNested()
    @Type(() => Vacant_Operation_Dto)
    operation: Vacant_Operation_Dto;

    @IsString()
    role_desc: string;

    @IsArray()
    @IsEnum(Artist_Enum, { each: true })
    role_type: Artist_Enum[]

    @ValidateNested()
    @Type(() => Vacant_Transport_Dto)
    transport_service: Vacant_Transport_Dto;

    @ValidateNested()
    @Type(() => Vacant_Housing_Dto)
    housing_service: Vacant_Housing_Dto;

    @ValidateNested()
    @Type(() => Vacant_Budget_Costs_Dto)
    vacant_costs: Vacant_Budget_Costs_Dto;

    @ValidateNested()
    @Type(() => Vacant_Budget_Payment_Dto)
    vacant_payment: Vacant_Budget_Payment_Dto;

    @ValidateNested()
    @Type(() => Direction_Dto)
    direction: Direction_Dto;

    @IsString()
    @IsOptional()
    specific_conditions: string;

}

/* let aux_create: Create_Vacant_Dto =
{
    "title": "Titulo vacante",
    "desc": "Descripcion vacante",
    "direction": {
        "address": "Calle falsa 123",
        "city": "Springfield",
        "state": "Springfield"
    },
    "operation": {
        "start_at": "2024-08-31 20:36:57+00",
        "end_at": "2024-08-31 20:36:57+00"
    },
    "role_type": ["SINGER"],
    "role_desc": "Descripcion del rol",
    "transport_service": {
        "enable": true,
        "type": "LAND",
        "desc": "Descripcion del servicio de transporte"
    },
    "housing_service": {
        "enable": true,
        "type": "HOTEL",
        "desc": "Descripcion del servicio de hospedaje"
    },
    "vacant_costs": {
        "enable": true,
        "desc": "Descripcion de los costos",
        "total": 500,
        "currency": "USD"
    },
    "vacant_payment": {
        "total": 1000,
        "currency": "USD"
    },
    "specific_conditions": "Condiciones especificas"
} */