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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const injection_service_1 = require("./injection.service");
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
const setting_service_1 = require("@notadd/setting/services/setting.service");
let ModuleService = class ModuleService {
    constructor(injectionService, settingService) {
        this.injectionService = injectionService;
        this.settingService = settingService;
        this.initialized = false;
        this.modules = [];
        this.injectionService
            .loadInjections()
            .filter((injection) => {
            return injection_constants_1.InjectionType.Module === Reflect.getMetadata("__injection_type__", injection.target);
        })
            .forEach((injection) => __awaiter(this, void 0, void 0, function* () {
            const identification = Reflect.getMetadata("identification", injection.target);
            this.modules.push({
                authors: Reflect.getMetadata("authors", injection.target),
                description: Reflect.getMetadata("description", injection.target),
                enabled: yield this.settingService.get(`module.${identification}.enabled`, false),
                identification: identification,
                installed: yield this.settingService.get(`module.${identification}.installed`, false),
                location: injection.location,
                name: Reflect.getMetadata("name", injection.target),
                version: Reflect.getMetadata("version", injection.target),
            });
        }));
        this.initialized = true;
    }
    disableModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            if (!(yield this.settingService.get(`module.${module.identification}.enabled`, false))) {
                throw new Error(`Module [${module.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`module.${module.identification}.enabled`, "0");
            return {
                message: `Disable module [${module.identification}] successfully!`,
            };
        });
    }
    enableModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            if (!(yield this.settingService.get(`module.${module.identification}.enabled`, false))) {
                throw new Error(`Module [${module.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`module.${module.identification}.enabled`, "1");
            return {
                message: `Enable module [${module.identification}] successfully!`,
            };
        });
    }
    getModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modules.find((module) => {
                return module.identification === identification;
            });
        });
    }
    getModules(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter && typeof filter.installed !== "undefined") {
                if (filter.installed) {
                    return this.modules.filter(module => {
                        return module.installed == true;
                    });
                }
                else {
                    return this.modules.filter(module => {
                        return !module.installed;
                    });
                }
            }
            else if (filter && typeof filter.enabled !== "undefined") {
                if (filter.enabled) {
                    return this.modules.filter(module => {
                        return module.installed == true && module.enabled == true;
                    });
                }
                else {
                    return this.modules.filter(module => {
                        return module.installed == true && !module.enabled;
                    });
                }
            }
            else {
                return this.modules;
            }
        });
    }
    installModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            if (yield this.settingService.get(`module.${module.identification}.installed`, false)) {
                throw new Error(`Module [${module.identification}] has been installed!`);
            }
            yield this.settingService.setSetting(`module.${module.identification}.installed`, "1");
            return {
                message: `Install module [${module.identification}] successfully!`,
            };
        });
    }
    uninstallModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            if (!(yield this.settingService.get(`module.${module.identification}.installed`, false))) {
                throw new Error(`Module [${module.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`module.${module.identification}.installed`, "0");
            return {
                message: `Uninstall module [${module.identification}] successfully!`,
            };
        });
    }
};
ModuleService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [injection_service_1.InjectionService,
        setting_service_1.SettingService])
], ModuleService);
exports.ModuleService = ModuleService;
