"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("../resolvers");
const services_1 = require("../services");
const common_1 = require("@nestjs/common");
const strategies_1 = require("../strategies");
const user_1 = require("@notadd/user");
let AuthenticationModule = class AuthenticationModule {
    configure(consumer) {
    }
};
AuthenticationModule = __decorate([
    common_1.Module({
        components: [
            resolvers_1.AuthResolvers,
            services_1.AuthService,
            strategies_1.JwtStrategy,
        ],
        imports: [
            common_1.forwardRef(() => user_1.UserModule),
        ],
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
