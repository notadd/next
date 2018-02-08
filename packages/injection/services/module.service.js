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
const setting_service_1 = require("@notadd/setting/services/setting.service");
const injection_constants_1 = require("../../../packages/core/constants/injection.constants");
let ModuleService = class ModuleService {
    constructor(injectionService, settingService) {
        this.injectionService = injectionService;
        this.settingService = settingService;
        this.initialized = false;
        this.modules = [];
        this.modules = this.injectionService
            .loadInjections()
            .filter((instance) => {
            const injectionType = Reflect.getMetadata("__injection_type__", instance);
            return injectionType === injection_constants_1.InjectionType.Module;
        })
            .map((instance) => {
            return {};
        });
        this.initialized = true;
    }
    disableModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            return module;
        });
    }
    enableModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            return module;
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
            return this.modules;
        });
    }
    installModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            return module;
        });
    }
    uninstallModule(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = yield this.getModule(identification);
            if (!module) {
                throw new Error("Module do not exists!");
            }
            return module;
        });
    }
};
ModuleService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [injection_service_1.InjectionService,
        setting_service_1.SettingService])
], ModuleService);
exports.ModuleService = ModuleService;
