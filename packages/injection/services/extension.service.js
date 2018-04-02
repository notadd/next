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
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
const setting_service_1 = require("@notadd/setting/services/setting.service");
const loaders_1 = require("../loaders");
let ExtensionService = class ExtensionService {
    constructor(settingService) {
        this.settingService = settingService;
        this.loader = new loaders_1.ExtensionLoader();
        this.loader.syncWithSetting(this.settingService);
    }
    getExtension(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.loader.extensions.find((extension) => {
                return extension.identification === identification;
            });
        });
    }
    getExtensions(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter && typeof filter.enabled !== "undefined") {
                if (filter.enabled) {
                    return this.loader.extensions.filter(extension => {
                        return extension.enabled === true;
                    });
                }
                else {
                    return this.loader.extensions.filter(extension => {
                        return !extension.enabled;
                    });
                }
            }
            else if (filter && typeof filter.installed !== "undefined") {
                if (filter.installed) {
                    return this.loader.extensions.filter(extension => {
                        return extension.installed === true;
                    });
                }
                else {
                    return this.loader.extensions.filter(extension => {
                        return !extension.installed;
                    });
                }
            }
            else {
                return this.loader.extensions;
            }
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
            let shell = "";
            if (extension.shell && extension.shell.install) {
                shell = extension.shell.install;
            }
            let result = "";
            if (shell.length > 0) {
                result = child_process_1.execFileSync(shell, []).toString();
            }
            yield this.settingService.setSetting(`extension.${extension.identification}.installed`, "1");
            yield this.loader.refresh().syncWithSetting(this.settingService);
            return {
                message: `Install extension [${extension.identification}] successfully!\n${result}`,
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
            let shell = "";
            if (extension.shell && extension.shell.uninstall) {
                shell = extension.shell.uninstall;
            }
            let result = "";
            if (shell.length > 0) {
                result = child_process_1.execFileSync(shell, []).toString();
            }
            yield this.settingService.setSetting(`extension.${extension.identification}.installed`, "0");
            yield this.loader.refresh().syncWithSetting(this.settingService);
            return {
                message: `Uninstall extension [${extension.identification}] successfully!\n${result}`,
            };
        });
    }
};
ExtensionService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], ExtensionService);
exports.ExtensionService = ExtensionService;
