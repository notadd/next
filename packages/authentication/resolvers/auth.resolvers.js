"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const guards_1 = require("../guards");
let AuthResolvers = class AuthResolvers {
    constructor(service) {
        this.service = service;
    }
    async getAuthToken(obj, args) {
        return this.service.createToken(args.auth.username, args.auth.password);
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(guards_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthResolvers.prototype, "getAuthToken", null);
AuthResolvers = __decorate([
    graphql_1.Resolver("Auth"),
    __metadata("design:paramtypes", [services_1.AuthService])
], AuthResolvers);
exports.AuthResolvers = AuthResolvers;

//# sourceMappingURL=auth.resolvers.js.map
