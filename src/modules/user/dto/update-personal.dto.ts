import { IsOptional, IsString } from "class-validator";


export class Update_Personal_Data_Dto {

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    city: string;

    @IsOptional()
    @IsString()
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
    state: string;

}