"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const logRepositoy_provider_1 = require("../providers/logRepositoy.provider");
const log_resolvers_1 = require("../resolvers/log.resolvers");
const log_service_1 = require("../services/log.service");
const database_module_1 = require("./database.module");
let LogModule = class LogModule {
};
LogModule = __decorate([
    common_1.Module({
        components: [
            ...logRepositoy_provider_1.logRepositoryProvider,
            log_resolvers_1.LogResolvers,
            log_service_1.LogService,
        ],
        exports: [
            log_service_1.LogService,
        ],
        imports: [
            database_module_1.DatabaseModule,
        ],
    })
], LogModule);
exports.LogModule = LogModule;
