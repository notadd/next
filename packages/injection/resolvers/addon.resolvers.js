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
const addon_service_1 = require("../services/addon.service");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_guard_1 = require("@notadd/authentication/guards/user.guard");
let AddonResolvers = class AddonResolvers {
    constructor(addonService) {
        this.addonService = addonService;
    }
    disableAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addonService.disableAddon(identification);
        });
    }
    enableAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addonService.enableAddon(identification);
        });
    }
    getAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addonService.getAddon(identification);
        });
    }
    getAddons(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addonService.getAddons(filter);
        });
    }
    installAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addonService.installAddon(identification);
        });
    }
    uninstallAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.addonService.uninstallAddon(identification);
        });
    }
};
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "disableAddon", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "enableAddon", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "getAddon", null);
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "getAddons", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "installAddon", null);
__decorate([
    graphql_1.Mutation(),
    common_1.UseGuards(user_guard_1.UserGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddonResolvers.prototype, "uninstallAddon", null);
AddonResolvers = __decorate([
    graphql_1.Resolver("Addon"),
    __metadata("design:paramtypes", [addon_service_1.AddonService])
], AddonResolvers);
exports.AddonResolvers = AddonResolvers;
