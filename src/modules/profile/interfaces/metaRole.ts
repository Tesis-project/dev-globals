
import { SchemaKey_I } from "../../../core/interfaces";
import { Profile_I } from "./profile";


export interface MetaRole_I extends SchemaKey_I {


    profile: Profile_I | string;

}