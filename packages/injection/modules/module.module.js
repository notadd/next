"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const module_resolvers_1 = require("../resolvers/module.resolvers");
const module_service_1 = require("../services/module.service");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
let ModuleModule = class ModuleModule {
};
ModuleModule = __decorate([
    common_1.Module({
        components: [
            module_resolvers_1.ModuleResolvers,
            module_service_1.ModuleService,
        ],
        imports: [
            setting_module_1.SettingModule,
        ],
    })
], ModuleModule);
exports.ModuleModule = ModuleModule;
