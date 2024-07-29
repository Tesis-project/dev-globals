"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaArtist_Models = void 0;
class MetaArtist_Models {
    constructor() {
    }
    set_artistMeta_Blank() {
        const _sk = {
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
exports.MetaArtist_Models = MetaArtist_Models;
//# sourceMappingURL=meta-artists.models.js.map