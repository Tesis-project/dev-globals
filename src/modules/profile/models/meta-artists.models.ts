
import { Meta_Artist_I } from "../interfaces";


export class MetaArtist_Models {

    constructor(){

    }

    set_artistMeta_Blank() {

        const _sk: Meta_Artist_I['skills'] = {

            singer: {
                voice_specialty: [],
                voice_type: []
            },
            instrumentist: {
                categories: [],
                position: [],
                specialty: []
            },
            orquests_director: {
                repertoire: [],
                specialty: []
            },
            scenes_director: {
                specialty: [],
                repertoire: []
            }

        };

        return _sk;

    }

}
