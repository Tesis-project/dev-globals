import { Type } from "class-transformer";
import { IsOptional, IsPhoneNumber, IsString, ValidateNested } from "class-validator";


class Direction_Dto {
    @IsString()
    address?: string;

    @IsString()
    city?: string;

    @IsString()
    state?: string;
}

class InstituesCompanies_Dto {

    @IsString()
    name: string;

    @IsString()
    rif_nif: string;

    @IsString()
    position: string;

    @IsPhoneNumber()
    phone: string;

    @ValidateNested()
    @Type(() => Direction_Dto)
    direction?: Direction_Dto;

}

export class Update_Meta_Contratist_Dto {

    @ValidateNested()
    @Type(() => InstituesCompanies_Dto)
    institutes_companies: InstituesCompanies_Dto;

}