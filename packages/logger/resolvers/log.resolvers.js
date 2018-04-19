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
const user_guard_1 = require("@notadd/authentication/guards/user.guard");
let LogResolvers = class LogResolvers {
    constructor(service) {
        this.service = service;
    }
    async getLogs() {
        return this.service.getLogs();
    }
    async getLogById(obj, { id }) {
        return this.service.getLogById(id);
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LogResolvers.prototype, "getLogs", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LogResolvers.prototype, "getLogById", null);
LogResolvers = __decorate([
    graphql_1.Resolver("Log"),
    __metadata("design:paramtypes", [services_1.LogService])
], LogResolvers);
exports.LogResolvers = LogResolvers;

//# sourceMappingURL=log.resolvers.js.map
