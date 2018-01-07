"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const setting_service_1 = require("../services/setting.service");
const configuration_service_1 = require("../services/configuration.service");
const database_module_1 = require("./database.module");
const repository_provider_1 = require("../providers/repository.provider");
const auth_module_1 = require("./auth.module");
const log_module_1 = require("./log.module");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        components: [
            ...repository_provider_1.repositoryProvider,
            configuration_service_1.ConfigurationService,
            setting_service_1.SettingService,
        ],
        modules: [
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            log_module_1.LogModule,
        ],
    })
], CommonModule);
exports.CommonModule = CommonModule;
