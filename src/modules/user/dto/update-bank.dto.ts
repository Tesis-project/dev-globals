import { IsEnum, IsOptional, IsPhoneNumber, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { Banks_Enum, Payment_Type_Enum } from "../interfaces";
import { Type } from "class-transformer";


export class Bank_Data_Dto {

    @IsOptional()
    @IsUUID(4)
    _id: string;

    @IsEnum(Payment_Type_Enum, {
        message: `Type must be one of the following values : ${{ ...Payment_Type_Enum }}`
    })
    type: string;

    @IsEnum(Banks_Enum, {
        message: `Gender must be one of the following values: ${{ ...Banks_Enum }}`
    })
    bank_name: string;

    @IsString()
    @MinLength(5)
    number: string;

    @IsString()
    titular: string;

    @IsString()
    @MinLength(5)
    person_id: string;

    @IsPhoneNumber()
    @MinLength(6)
    phone: string;

}

export class Update_Bank_Data_Dto {

    @ValidateNested({ each: true })
    @Type(() => Bank_Data_Dto)
    payment_accounts: Bank_Data_Dto[];

}