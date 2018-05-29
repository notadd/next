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
const module_service_1 = require("../services/module.service");
let ModuleResolvers = class ModuleResolvers {
    constructor(moduleService) {
        this.moduleService = moduleService;
    }
    async disableModule(context, args) {
        return this.moduleService.disableModule(args.identification);
    }
    async enableModule(context, args) {
        return this.moduleService.enableModule(args.identification);
    }
    async getModule(context, args) {
        return this.moduleService.getModule(args.identification);
    }
    async getModules(context, args) {
        return this.moduleService.getModules(args.filters);
    }
    async installModule(context, args) {
        return this.moduleService.installModule(args.identification);
    }
    async uninstallModule(context, args) {
        return this.moduleService.uninstallModule(args.identification);
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "disableModule", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "enableModule", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "getModule", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "getModules", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "installModule", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "uninstallModule", null);
ModuleResolvers = __decorate([
    graphql_1.Resolver("Module"),
    __metadata("design:paramtypes", [module_service_1.ModuleService])
], ModuleResolvers);
exports.ModuleResolvers = ModuleResolvers;

//# sourceMappingURL=module.resolvers.js.map
