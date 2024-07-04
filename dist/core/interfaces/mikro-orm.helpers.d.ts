import { EntityManager, FilterQuery, FindOneOptions, FindOptions } from "@mikro-orm/core";
export interface _Find_One_I<T extends object, J extends string> {
    data: FilterQuery<T>;
    options?: FindOneOptions<T, J>;
    _em?: EntityManager;
}
export interface _Find_Many_I<T extends object, J extends string> {
    data: FilterQuery<T>;
    options?: FindOptions<T, J>;
    _em?: EntityManager;
}
export interface _Process_I<T = any> {
    data: T;
    _em?: EntityManager;
}
