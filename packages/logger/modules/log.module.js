"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const log_resolvers_1 = require("../resolvers/log.resolvers");
const log_service_1 = require("../services/log.service");
const typeorm_1 = require("@nestjs/typeorm");
const log_entity_1 = require("../entities/log.entity");
let LogModule = class LogModule {
};
LogModule = __decorate([
    common_1.Module({
        components: [
            log_resolvers_1.LogResolvers,
            log_service_1.LogService,
        ],
        exports: [
            log_service_1.LogService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([log_entity_1.Log]),
        ],
    })
], LogModule);
exports.LogModule = LogModule;
