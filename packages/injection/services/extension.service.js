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
let ExtensionService = class ExtensionService {
    constructor(injectionService, settingService) {
        this.injectionService = injectionService;
        this.settingService = settingService;
        this.initialized = false;
        this.extensions = [];
        this.extensions = this.injectionService
            .loadInjections()
            .filter((injection) => {
            return injection_constants_1.InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
        })
            .map((injection) => {
            return {
                authors: Reflect.getMetadata("authors", injection.target),
                description: Reflect.getMetadata("description", injection.target),
                identification: Reflect.getMetadata("identification", injection.target),
                location: injection.location,
                name: Reflect.getMetadata("name", injection.target),
                version: Reflect.getMetadata("version", injection.target),
            };
        });
        this.initialized = true;
    }
    disableExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const extension = yield this.getExtension(identification);
            if (!extension) {
                throw new Error("Extension do not exists!");
            }
            if (!(yield this.settingService.get(`extension.${extension.identification}.enabled`, false))) {
                throw new Error(`Extension [${extension.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`extension.${extension.identification}.enabled`, "0");
            return {
                message: `Disable extension [${extension.identification}] successfully!`,
            };
        });
    }
    enableExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const extension = yield this.getExtension(identification);
            if (!extension) {
                throw new Error("Extension do not exists!");
            }
            if (!(yield this.settingService.get(`extension.${extension.identification}.enabled`, false))) {
                throw new Error(`Extension [${extension.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`extension.${extension.identification}.enabled`, "1");
            return {
                message: `Enable extension [${extension.identification}] successfully!`,
            };
        });
    }
    getExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.extensions.find((extension) => {
                return extension.identification === identification;
            });
        });
    }
    getExtensions(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.extensions;
        });
    }
    installExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const extension = yield this.getExtension(identification);
            if (!extension) {
                throw new Error("Extension do not exists!");
            }
            if (yield this.settingService.get(`extension.${extension.identification}.installed`, false)) {
                throw new Error(`Extension [${extension.identification}] has been installed!`);
            }
            yield this.settingService.setSetting(`extension.${extension.identification}.installed`, "1");
            return {
                message: `Install extension [${extension.identification}] successfully!`,
            };
        });
    }
    uninstallExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const extension = yield this.getExtension(identification);
            if (!extension) {
                throw new Error("Extension do not exists!");
            }
            if (!(yield this.settingService.get(`extension.${extension.identification}.installed`, false))) {
                throw new Error(`Extension [${extension.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`extension.${extension.identification}.installed`, "0");
            return {
                message: `Uninstall extension [${extension.identification}] successfully!`,
            };
        });
    }
};
ExtensionService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [injection_service_1.InjectionService,
        setting_service_1.SettingService])
], ExtensionService);
exports.ExtensionService = ExtensionService;
