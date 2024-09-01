"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseBodyInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let ParseBodyInterceptor = class ParseBodyInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        if (req.body?.body && typeof req.body.body === 'string') {
            try {
                req.body = JSON.parse(req.body.body);
            }
            catch (error) {
                throw new Error('Invalid JSON format in the body field');
            }
        }
        return next.handle().pipe((0, rxjs_1.map)(data => data));
    }
};
exports.ParseBodyInterceptor = ParseBodyInterceptor;
exports.ParseBodyInterceptor = ParseBodyInterceptor = __decorate([
    (0, common_1.Injectable)()
], ParseBodyInterceptor);
//# sourceMappingURL=parse-body.interceptor.js.map