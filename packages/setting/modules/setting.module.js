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
const cqrs_1 = require("@nestjs/cqrs");
const handlers_1 = require("../commands/handlers");
const handlers_2 = require("../events/handlers");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const entities_1 = require("../entities");
const resolvers_1 = require("../resolvers");
const services_1 = require("../services");
const typeorm_1 = require("@nestjs/typeorm");
let SettingModule = class SettingModule {
    constructor(moduleRef, command, event) {
        this.moduleRef = moduleRef;
        this.command = command;
        this.event = event;
    }
    onModuleInit() {
        this.command.setModuleRef(this.moduleRef);
        this.command.register(handlers_1.commandHandlers);
        this.event.setModuleRef(this.moduleRef);
        this.event.register(handlers_2.eventHandlers);
    }
};
SettingModule = __decorate([
    common_1.Module({
        components: [
            ...handlers_1.commandHandlers,
            ...handlers_2.eventHandlers,
            resolvers_1.SettingResolvers,
            services_1.SettingService,
        ],
        exports: [
            services_1.SettingService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.Setting,
            ]),
            cqrs_1.CQRSModule,
        ]
    }),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        cqrs_1.CommandBus,
        cqrs_1.EventBus])
], SettingModule);
exports.SettingModule = SettingModule;

//# sourceMappingURL=setting.module.js.map
