"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const settingRepository_provider_1 = require("../providers/settingRepository.provider");
const setting_resolvers_1 = require("../resolvers/setting.resolvers");
const setting_service_1 = require("../services/setting.service");
const database_module_1 = require("./database.module");
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    common_1.Module({
        components: [
            ...settingRepository_provider_1.settingRepositoryProvider,
            setting_resolvers_1.SettingResolvers,
            setting_service_1.SettingService,
        ],
        exports: [
            setting_service_1.SettingService,
        ],
        imports: [
            database_module_1.DatabaseModule,
        ]
    })
], SettingModule);
exports.SettingModule = SettingModule;
