"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const addon_module_1 = require("./addon.module");
const dashboard_module_1 = require("./dashboard.module");
const dashboards_1 = require("../dashboards");
const extension_module_1 = require("./extension.module");
const module_module_1 = require("./module.module");
const page_module_1 = require("./page.module");
const configuration_page_1 = require("../pages/configuration.page");
const load_extensions_from_files_1 = require("../utilities/load-extensions-from-files");
const load_modules_from_files_1 = require("../utilities/load-modules-from-files");
const load_addons_from_files_1 = require("../utilities/load-addons-from-files");
let InjectionModule = class InjectionModule {
};
InjectionModule = __decorate([
    common_1.Module({
        imports: [
            ...load_extensions_from_files_1.loadExtensionsFromFiles(),
            ...load_modules_from_files_1.loadModulesFromFiles(),
            ...load_addons_from_files_1.loadAddonsFromFiles(),
            common_1.forwardRef(() => extension_module_1.ExtensionModule),
            common_1.forwardRef(() => module_module_1.ModuleModule),
            common_1.forwardRef(() => addon_module_1.AddonModule),
            dashboard_module_1.DashboardModule,
            page_module_1.PageModule,
        ],
        providers: [
            configuration_page_1.ConfigurationPage,
            dashboards_1.DeveloperDashboard,
        ],
    })
], InjectionModule);
exports.InjectionModule = InjectionModule;

//# sourceMappingURL=injection.module.js.map
