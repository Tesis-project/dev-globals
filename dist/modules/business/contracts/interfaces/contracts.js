"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract_DetailType_Enum = exports.Contract_Status_Enum = exports.Contract_Details_Status_Payment_Enum = void 0;
var Contract_Details_Status_Payment_Enum;
(function (Contract_Details_Status_Payment_Enum) {
    Contract_Details_Status_Payment_Enum["PENDING"] = "PENDING";
    Contract_Details_Status_Payment_Enum["PAID"] = "PAID";
    Contract_Details_Status_Payment_Enum["CANCELED"] = "CANCELED";
})(Contract_Details_Status_Payment_Enum || (exports.Contract_Details_Status_Payment_Enum = Contract_Details_Status_Payment_Enum = {}));
var Contract_Status_Enum;
(function (Contract_Status_Enum) {
    Contract_Status_Enum["PLANNING"] = "PLANNING";
    Contract_Status_Enum["SINGS_PENDING"] = "SINGS_PENDING";
    Contract_Status_Enum["IN_PROGRESS"] = "IN_PROGRESS";
    Contract_Status_Enum["CANCELLED"] = "CANCELLED";
    Contract_Status_Enum["COMPLETED"] = "COMPLETED";
})(Contract_Status_Enum || (exports.Contract_Status_Enum = Contract_Status_Enum = {}));
var Contract_DetailType_Enum;
(function (Contract_DetailType_Enum) {
    Contract_DetailType_Enum["PAYMENT_INFO"] = "PAYMENT_INFO";
    Contract_DetailType_Enum["SET_PAYMENT"] = "SET_PAYMENT";
    Contract_DetailType_Enum["CANCEL_PAYMENT"] = "CANCEL_PAYMENT";
})(Contract_DetailType_Enum || (exports.Contract_DetailType_Enum = Contract_DetailType_Enum = {}));
//# sourceMappingURL=contracts.js.map