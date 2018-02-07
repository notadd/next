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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_service_1 = require("../services/module.service");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_guard_1 = require("@notadd/authentication/guards/user.guard");
let ModuleResolvers = class ModuleResolvers {
    constructor(moduleService) {
        this.moduleService = moduleService;
    }
    disableModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.disableModule(identification);
        });
    }
    enableModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.enableModule(identification);
        });
    }
    getModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.getModule(identification);
        });
    }
    getModules(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.getModules(filter);
        });
    }
    installModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.installModule(identification);
        });
    }
    uninstallModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleService.uninstallModule(identification);
        });
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "disableModule", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "enableModule", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "getModule", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "getModules", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "installModule", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleResolvers.prototype, "uninstallModule", null);
ModuleResolvers = __decorate([
    graphql_1.Resolver("Module"),
    __metadata("design:paramtypes", [module_service_1.ModuleService])
], ModuleResolvers);
exports.ModuleResolvers = ModuleResolvers;
