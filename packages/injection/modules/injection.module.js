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
const pages_1 = require("../pages");
const utilities_1 = require("../utilities");
let InjectionModule = class InjectionModule {
};
InjectionModule = __decorate([
    common_1.Module({
        imports: [
            ...utilities_1.loadExtensionsFromFiles(),
            ...utilities_1.loadModulesFromFiles(),
            ...utilities_1.loadAddonsFromFiles(),
            common_1.forwardRef(() => extension_module_1.ExtensionModule),
            common_1.forwardRef(() => module_module_1.ModuleModule),
            common_1.forwardRef(() => addon_module_1.AddonModule),
            dashboard_module_1.DashboardModule,
            page_module_1.PageModule,
        ],
        providers: [
            pages_1.ConfigurationPage,
            dashboards_1.DeveloperDashboard,
        ],
    })
], InjectionModule);
exports.InjectionModule = InjectionModule;

//# sourceMappingURL=injection.module.js.map
