
import { PartialType } from '@nestjs/mapped-types';
import { CreateUser_Dto } from './create-user.dto';
import { Gender_Enum } from '../interfaces';

import { IsEnum, IsOptional, IsPhoneNumber, IsString, IsUUID, MinLength, ValidateIf, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


export class Direction_Dto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;
}

export class UpdateUser_Dto extends PartialType(CreateUser_Dto) {

    @IsUUID(4, { message: 'Invalid UUID' })
    _id: string;

    @IsEnum(Gender_Enum, {
        message: `Gender must be one of the following values: ${{ ...Gender_Enum }}`
    })
    @IsOptional()
    gender?: string;

    @ValidateIf(o => o.phone !== '' && o.phone !== null && o.phone !== undefined)
    @IsOptional()
    @IsPhoneNumber()
    phone?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => Direction_Dto)
    direction?: Direction_Dto;

}
