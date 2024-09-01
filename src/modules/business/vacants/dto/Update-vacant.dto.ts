
import { PartialType } from "@nestjs/mapped-types";
import { Create_Vacant_Dto } from ".";
import { IsUUID } from "class-validator";

export class Update_Vacant_Dto extends PartialType(Create_Vacant_Dto) {

    @IsUUID(4, { message: 'Invalid UUID' })
    _id: string;

}