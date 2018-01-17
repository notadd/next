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
const log_entity_1 = require("../entities/log.entity");
const log_resolvers_1 = require("../resolvers/log.resolvers");
const log_service_1 = require("../services/log.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cqrs_1 = require("@nestjs/cqrs");
const core_1 = require("@nestjs/core");
const index_1 = require("../commands/handlers/index");
const index_2 = require("../events/handlers/index");
let LoggerModule = class LoggerModule {
    constructor(moduleRef, command, event) {
        this.moduleRef = moduleRef;
        this.command = command;
        this.event = event;
    }
    onModuleInit() {
        this.command.setModuleRef(this.moduleRef);
        this.command.register(index_1.CommandHandlers);
        this.event.setModuleRef(this.moduleRef);
        this.event.register(index_2.EventHandlers);
    }
};
LoggerModule = __decorate([
    common_1.Module({
        components: [
            ...index_1.CommandHandlers,
            ...index_2.EventHandlers,
            log_resolvers_1.LogResolvers,
            log_service_1.LogService,
        ],
        exports: [
            log_service_1.LogService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([log_entity_1.Log]),
            cqrs_1.CQRSModule,
        ],
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        cqrs_1.CommandBus,
        cqrs_1.EventBus])
], LoggerModule);
exports.LoggerModule = LoggerModule;
