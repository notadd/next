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
const addon_module_1 = require("./addon.module");
const sagas_1 = require("../sagas");
const cqrs_1 = require("@nestjs/cqrs");
const handlers_1 = require("../commands/handlers");
const pages_1 = require("../pages");
const dashboard_module_1 = require("./dashboard.module");
const dashboards_1 = require("../dashboards");
const handlers_2 = require("../events/handlers");
const extension_module_1 = require("./extension.module");
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
const module_module_1 = require("./module.module");
const page_module_1 = require("./page.module");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
const user_1 = require("@notadd/user");
const core_1 = require("@nestjs/core");
const utilities_1 = require("../utilities");
let InjectionModule = class InjectionModule {
    constructor(addonSagas, command$, event$, extensionSagas, moduleRef, moduleSagas) {
        this.addonSagas = addonSagas;
        this.command$ = command$;
        this.event$ = event$;
        this.extensionSagas = extensionSagas;
        this.moduleRef = moduleRef;
        this.moduleSagas = moduleSagas;
    }
    onModuleInit() {
        this.command$.setModuleRef(this.moduleRef);
        this.event$.setModuleRef(this.moduleRef);
        this.event$.register(handlers_2.eventHandlers);
        this.command$.register(handlers_1.commandHandlers);
        this.event$.combineSagas([]);
    }
};
InjectionModule = __decorate([
    common_1.Module({
        components: [
            ...handlers_1.commandHandlers,
            ...handlers_2.eventHandlers,
            sagas_1.AddonSagas,
            pages_1.ConfigurationPage,
            dashboards_1.DeveloperDashboard,
            sagas_1.ExtensionSagas,
            services_1.InjectionService,
            sagas_1.ModuleSagas,
        ],
        exports: [
            services_1.InjectionService,
        ],
        imports: [
            ...utilities_1.loadExtensionsFromFiles(),
            ...utilities_1.loadModulesFromFiles(),
            ...utilities_1.loadAddonsFromFiles(),
            common_1.forwardRef(() => extension_module_1.ExtensionModule),
            common_1.forwardRef(() => module_module_1.ModuleModule),
            common_1.forwardRef(() => addon_module_1.AddonModule),
            cqrs_1.CQRSModule,
            dashboard_module_1.DashboardModule,
            page_module_1.PageModule,
            setting_module_1.SettingModule,
            user_1.UserModule,
        ],
    }),
    __metadata("design:paramtypes", [sagas_1.AddonSagas,
        cqrs_1.CommandBus,
        cqrs_1.EventBus,
        sagas_1.ExtensionSagas,
        core_1.ModuleRef,
        sagas_1.ModuleSagas])
], InjectionModule);
exports.InjectionModule = InjectionModule;
