"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestStatus_Enum = exports.RequestType_Enum = void 0;
var RequestType_Enum;
(function (RequestType_Enum) {
    RequestType_Enum["CONFIRM_ACCOUNT"] = "CONFIRM_ACCOUNT";
    RequestType_Enum["RESET_PASSWORD"] = "RESET_PASSWORD";
    RequestType_Enum["CHANGE_EMAIL"] = "CHANGE_EMAIL";
})(RequestType_Enum || (exports.RequestType_Enum = RequestType_Enum = {}));
var RequestStatus_Enum;
(function (RequestStatus_Enum) {
    RequestStatus_Enum["PENDING"] = "PENDING";
    RequestStatus_Enum["USED"] = "USED";
    RequestStatus_Enum["EXPIRED"] = "EXPIRED";
})(RequestStatus_Enum || (exports.RequestStatus_Enum = RequestStatus_Enum = {}));
//# sourceMappingURL=requests.js.map