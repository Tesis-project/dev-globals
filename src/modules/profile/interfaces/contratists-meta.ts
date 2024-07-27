import { SchemaKey_I } from "../../../core/interfaces";
import { MetaRole_I } from "./metaRole";



export interface InstitutesCompanies_I {

    name: string;
    rif_nif: string;
    direction?: {
        address: string;
        city: string;
        state: string;
    }
    position: string;
    phone: string;

}

export interface Meta_Contratist_I extends SchemaKey_I {

    institutes_companies: InstitutesCompanies_I,
    meta_role: MetaRole_I | string;
    updated_at?: Date;

}