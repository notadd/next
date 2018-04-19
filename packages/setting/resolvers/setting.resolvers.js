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
const graphql_1 = require("@nestjs/graphql");
const services_1 = require("../services");
const common_1 = require("@nestjs/common");
const authentication_1 = require("@notadd/authentication");
let SettingResolvers = class SettingResolvers {
    constructor(service) {
        this.service = service;
    }
    async getSettings() {
        return this.service.getSettings();
    }
    async getSettingByKey(object, args) {
        return this.service.getSettingByKey(args.key);
    }
    async removeSetting(obj, args) {
        await this.service.removeSetting(args.key);
        return {
            code: 200,
            message: "Remove setting successfully!",
        };
    }
    async setSetting(obj, args) {
        await this.service.setSetting(args.key, args.value);
        return {
            code: 200,
            message: "Set setting successfully!",
        };
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingResolvers.prototype, "getSettings", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingResolvers.prototype, "getSettingByKey", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingResolvers.prototype, "removeSetting", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(authentication_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SettingResolvers.prototype, "setSetting", null);
SettingResolvers = __decorate([
    graphql_1.Resolver("Setting"),
    __metadata("design:paramtypes", [services_1.SettingService])
], SettingResolvers);
exports.SettingResolvers = SettingResolvers;

//# sourceMappingURL=setting.resolvers.js.map
