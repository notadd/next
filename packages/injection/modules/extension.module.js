"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const extension_resolvers_1 = require("../resolvers/extension.resolvers");
const extension_service_1 = require("../services/extension.service");
const load_extensions_from_files_1 = require("../utilities/load-extensions-from-files");
const common_1 = require("@nestjs/common");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
const injection_module_1 = require("./injection.module");
let ExtensionModule = class ExtensionModule {
};
ExtensionModule = __decorate([
    common_1.Module({
        components: [
            extension_resolvers_1.ExtensionResolvers,
            extension_service_1.ExtensionService,
        ],
        imports: [
            ...load_extensions_from_files_1.loadExtensionsFromFiles(),
            common_1.forwardRef(() => injection_module_1.InjectionModule),
            setting_module_1.SettingModule,
        ],
    })
], ExtensionModule);
exports.ExtensionModule = ExtensionModule;
