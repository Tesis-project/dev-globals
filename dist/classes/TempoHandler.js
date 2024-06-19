"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempoHandler = void 0;
const tempo_1 = require("@formkit/tempo");
class TempoHandler {
    date_now() {
        return (0, tempo_1.format)({
            date: new Date(),
            format: "YYYY-MM-DD HH:mm:ss",
            tz: "America/Caracas",
        });
    }
}
exports.TempoHandler = TempoHandler;
//# sourceMappingURL=TempoHandler.js.map