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
const extension_service_1 = require("../services/extension.service");
let ExtensionResolvers = class ExtensionResolvers {
    constructor(extensionService) {
        this.extensionService = extensionService;
    }
    async getExtension(context, args) {
        return this.extensionService.getExtension(args.identification);
    }
    async getExtensions(context, args) {
        return this.extensionService.getExtensions(args.filters);
    }
    async installExtension(context, args) {
        return this.extensionService.installExtension(args.identification);
    }
    async uninstallExtension(context, args) {
        return this.extensionService.uninstallExtension(args.identification);
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "getExtension", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "getExtensions", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "installExtension", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ExtensionResolvers.prototype, "uninstallExtension", null);
ExtensionResolvers = __decorate([
    graphql_1.Resolver("Extension"),
    __metadata("design:paramtypes", [extension_service_1.ExtensionService])
], ExtensionResolvers);
exports.ExtensionResolvers = ExtensionResolvers;

//# sourceMappingURL=extension.resolvers.js.map
