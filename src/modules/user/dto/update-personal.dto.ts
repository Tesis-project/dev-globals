import { IsOptional, IsPhoneNumber, IsString, ValidateIf } from "class-validator";


export class Update_Personal_Data_Dto {

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    city: string;

    @ValidateIf(o => o.phone !== '' && o.phone !== null && o.phone !== undefined)
    @IsOptional()
    @IsPhoneNumber()
    phone: string;

    @IsOptional()
    @IsString()
    postal_code: string;

    @IsOptional()
    @IsString()
    rif: string;

    @IsOptional()
    @IsString()
    social_reason: string;

    @IsOptional()
    @IsString()
    specific_conditions: string;

    @IsOptional()
    @IsString()
    state: string;

}