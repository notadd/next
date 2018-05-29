"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
const resolvers_1 = require("../resolvers");
const services_1 = require("../services");
let AddonModule = class AddonModule {
};
AddonModule = __decorate([
    common_1.Module({
        exports: [
            services_1.AddonService,
        ],
        imports: [
            setting_module_1.SettingModule,
        ],
        providers: [
            resolvers_1.AddonResolvers,
            services_1.AddonService,
        ],
    })
], AddonModule);
exports.AddonModule = AddonModule;

//# sourceMappingURL=addon.module.js.map
