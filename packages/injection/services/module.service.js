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
const common_1 = require("@nestjs/common");
const get_package_path_by_module_1 = require("../utilities/get-package-path-by-module");
const path_1 = require("path");
const loaders_1 = require("../loaders");
const builders_1 = require("../builders");
const setting_service_1 = require("@notadd/setting/services/setting.service");
let ModuleService = class ModuleService {
    constructor(settingService) {
        this.settingService = settingService;
        this.loader = new loaders_1.ModuleLoader();
        this.loader.syncWithSetting(this.settingService);
    }
    async disableModule(identification) {
        const module = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (!await this.settingService.get(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.enabled`, "0");
        await this.loader.refresh().syncWithSetting(this.settingService);
        return {
            message: `Disable module [${module.identification}] successfully!`,
        };
    }
    async enableModule(identification) {
        const module = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (!await this.settingService.get(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.enabled`, "1");
        await this.loader.refresh().syncWithSetting(this.settingService);
        return {
            message: `Enable module [${module.identification}] successfully!`,
        };
    }
    async getModule(identification) {
        return this.loader.modules.find((module) => {
            return module.identification === identification;
        });
    }
    async getModules(filter) {
        if (filter && typeof filter.installed !== "undefined") {
            if (filter.installed) {
                return this.loader.modules.filter(module => {
                    return module.installed === true;
                });
            }
            else {
                return this.loader.modules.filter(module => {
                    return !module.installed;
                });
            }
        }
        else if (filter && typeof filter.enabled !== "undefined") {
            if (filter.enabled) {
                return this.loader.modules.filter(module => {
                    return module.installed === true && module.enabled === true;
                });
            }
            else {
                return this.loader.modules.filter(module => {
                    return module.installed === true && !module.enabled;
                });
            }
        }
        else {
            return this.loader.modules;
        }
    }
    async installModule(identification) {
        const module = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (await this.settingService.get(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] has been installed!`);
        }
        await this.syncSchema(module);
        await this.settingService.setSetting(`module.${module.identification}.installed`, "1");
        await this.loader.refresh().syncWithSetting(this.settingService);
        return {
            message: `Install module [${module.identification}] successfully!`,
        };
    }
    async uninstallModule(identification) {
        const module = await this.getModule(identification);
        if (!module) {
            throw new Error("Module do not exists!");
        }
        if (!await this.settingService.get(`module.${module.identification}.installed`, false)) {
            throw new Error(`Module [${module.identification}] is not installed!`);
        }
        await this.settingService.setSetting(`module.${module.identification}.installed`, "0");
        await this.loader.refresh().syncWithSetting(this.settingService);
        return {
            message: `Uninstall module [${module.identification}] successfully!`,
        };
    }
    async dropSchema(module) {
        const path = get_package_path_by_module_1.getPackagePathByModule(module);
        if (path.length) {
            const builder = new builders_1.SchemaBuilder();
            builder.buildMetadatas([
                path_1.join(path, "*/*.entity.js"),
                path_1.join(path, "**/*.entity.js"),
            ]);
            await builder.drop();
        }
    }
    async syncSchema(module) {
        const path = get_package_path_by_module_1.getPackagePathByModule(module);
        if (path.length) {
            const builder = new builders_1.SchemaBuilder();
            builder.buildMetadatas([
                path_1.join(path, "*/*.entity.js"),
                path_1.join(path, "**/*.entity.js"),
            ]);
            await builder.sync();
        }
    }
};
ModuleService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], ModuleService);
exports.ModuleService = ModuleService;

//# sourceMappingURL=module.service.js.map
