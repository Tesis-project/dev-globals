
import { SchemaKey_I } from "../../../core/interfaces";
import { Meta_Artist_I } from "./artists-skills";
import { Meta_Contratist_I } from "./contratists-meta";
import { Profile_I } from "./profile";


export interface MetaRole_I extends SchemaKey_I {

    meta_artist?: Meta_Artist_I | string;
    meta_contratist?: Meta_Contratist_I | string;
    profile?: Profile_I | string;

}



