"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const entities_1 = require("../entities");
const resolvers_1 = require("../resolvers");
const services_1 = require("../services");
const typeorm_1 = require("@nestjs/typeorm");
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    common_1.Module({
        exports: [
            services_1.SettingService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.Setting,
            ]),
        ],
        providers: [
            resolvers_1.SettingResolvers,
            services_1.SettingService,
        ]
    })
], SettingModule);
exports.SettingModule = SettingModule;

//# sourceMappingURL=setting.module.js.map
