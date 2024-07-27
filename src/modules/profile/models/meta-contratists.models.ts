
import { InstitutesCompanies_I } from "../interfaces";


export class MetaContratists_Models {

    constructor() {

    }

    set_contratistsMeta_Blank() {

        const c: InstitutesCompanies_I = {

            name: "",
            rif_nif: "",
            direction: {
                address: "",
                city: "",
                state: ""
            },
            position: "",
            phone: ""

        };

        return c;

    }

}
