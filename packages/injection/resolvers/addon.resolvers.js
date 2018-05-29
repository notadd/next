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
const common_1 = require("@nestjs/common");
const user_guard_1 = require("@notadd/authentication/guards/user.guard");
const services_1 = require("../services");
let AddonResolvers = class AddonResolvers {
    constructor(addonService) {
        this.addonService = addonService;
    }
    async disableAddon(context, args) {
        return this.addonService.disableAddon(args.identification);
    }
    async enableAddon(context, args) {
        return this.addonService.enableAddon(args.identification);
    }
    async getAddon(context, args) {
        return this.addonService.getAddon(args.identification);
    }
    async getAddons(context, args) {
        return this.addonService.getAddons(args.filters);
    }
    async installAddon(context, args) {
        return this.addonService.installAddon(args.identification);
    }
    async uninstallAddon(context, args) {
        return this.addonService.uninstallAddon(args.identification);
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "disableAddon", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "enableAddon", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "getAddon", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "getAddons", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "installAddon", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "uninstallAddon", null);
AddonResolvers = __decorate([
    graphql_1.Resolver("Addon"),
    __metadata("design:paramtypes", [services_1.AddonService])
], AddonResolvers);
exports.AddonResolvers = AddonResolvers;

//# sourceMappingURL=addon.resolvers.js.map
