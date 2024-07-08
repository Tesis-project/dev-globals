"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Role_Enum = exports.AuthStatus_Enum = void 0;
var AuthStatus_Enum;
(function (AuthStatus_Enum) {
    AuthStatus_Enum["NONE"] = "NONE";
    AuthStatus_Enum["VERIFIED"] = "VERIFIED";
    AuthStatus_Enum["NOT"] = "NOT";
    AuthStatus_Enum["BLOCKED"] = "BLOCKED";
    AuthStatus_Enum["DELETED"] = "DELETED";
    AuthStatus_Enum["SUSPENDED"] = "SUSPENDED";
    AuthStatus_Enum["PENDING"] = "PENDING";
    AuthStatus_Enum["ACTIVE"] = "ACTIVE";
    AuthStatus_Enum["INACTIVE"] = "INACTIVE";
})(AuthStatus_Enum || (exports.AuthStatus_Enum = AuthStatus_Enum = {}));
var User_Role_Enum;
(function (User_Role_Enum) {
    User_Role_Enum["ARTIST_ROLE"] = "ARTIST_ROLE";
    User_Role_Enum["CONTRATIST_ROLE"] = "CONTRATIST_ROLE";
    User_Role_Enum["ADMIN_ROLE"] = "ADMIN_ROLE";
})(User_Role_Enum || (exports.User_Role_Enum = User_Role_Enum = {}));
//# sourceMappingURL=auth.js.map