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
const graphql_1 = require("@nestjs/graphql");
const setting_service_1 = require("../../setting/services/setting.service");
const common_1 = require("@nestjs/common");
const authentication_1 = require("@notadd/authentication");
let SettingResolvers = class SettingResolvers {
    constructor(service) {
        this.service = service;
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getSettings();
        });
    }
    getSettingByKey(object, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getSettingByKey(args.key);
        });
    }
    removeSetting(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.removeSetting(args.key);
        });
    }
    setSetting(obj, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.setSetting(args.key, args.value);
        });
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
    graphql_1.Resolver('Setting'),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], SettingResolvers);
exports.SettingResolvers = SettingResolvers;
