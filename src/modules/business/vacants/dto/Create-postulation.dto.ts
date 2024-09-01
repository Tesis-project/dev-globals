import { IsOptional, IsString } from "class-validator";


export class Create_Postulation_Dto {

    @IsOptional()
    @IsString()
    comment?: string;

}