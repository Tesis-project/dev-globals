import { CreateUser_Dto } from './create-user.dto';
export declare class Direction_Dto {
    address?: string;
    city?: string;
    state?: string;
}
declare const UpdateUser_Dto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUser_Dto>>;
export declare class UpdateUser_Dto extends UpdateUser_Dto_base {
    _id: string;
    gender?: string;
    phone?: string;
    direction?: Direction_Dto;
}
export {};
