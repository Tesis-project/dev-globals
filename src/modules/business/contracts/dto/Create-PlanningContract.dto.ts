import { IsUUID, isUUID } from "class-validator";


export class Create_PlanningContract_Dto {

    // @IsUUID()
    // vacant_id: string;
    @IsUUID()
    postulation_id: string;

}