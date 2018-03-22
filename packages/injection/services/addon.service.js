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
const fs_1 = require("fs");
const get_package_path_by_addon_1 = require("../utilities/get-package-path-by-addon");
const injection_service_1 = require("./injection.service");
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const builders_1 = require("../builders");
const setting_service_1 = require("@notadd/setting/services/setting.service");
let AddonService = class AddonService {
    constructor(injectionService, settingService) {
        this.injectionService = injectionService;
        this.settingService = settingService;
        this.initialized = false;
        this.addons = [];
        this.loadInjections();
    }
    disableAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const addon = yield this.getAddon(identification);
            if (!addon) {
                throw new Error("Addon do not exists!");
            }
            yield this.settingService.setSetting(`addon.${addon.identification}.enabled`, "0");
            yield this.loadInjections(true);
            return {
                message: `Disable addon [${addon.identification}] successfully!`,
            };
        });
    }
    enableAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const addon = yield this.getAddon(identification);
            if (!addon) {
                throw new Error("Addon do not exists!");
            }
            if (!(yield this.settingService.get(`addon.${addon.identification}.installed`, false))) {
                throw new Error(`Addon [${addon.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`addon.${addon.identification}.enabled`, "1");
            yield this.loadInjections(true);
            return {
                message: `Enable addon [${addon.identification}] successfully!`,
            };
        });
    }
    getAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addons.find((addon) => {
                return addon.identification === identification;
            });
        });
    }
    getAddons(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (filter && typeof filter.enabled !== "undefined") {
                if (filter.enabled) {
                    return this.addons.filter(addon => {
                        return addon.enabled === true;
                    });
                }
                else {
                    return this.addons.filter(addon => {
                        return !addon.enabled;
                    });
                }
            }
            else if (filter && typeof filter.installed !== "undefined") {
                if (filter.installed) {
                    return this.addons.filter(addon => {
                        return addon.installed === true;
                    });
                }
                else {
                    return this.addons.filter(addon => {
                        return !addon.installed;
                    });
                }
            }
            else {
                return this.addons;
            }
        });
    }
    installAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const addon = yield this.getAddon(identification);
            if (!addon) {
                throw new Error("Addon do not exists!");
            }
            if (yield this.settingService.get(`addon.${addon.identification}.installed`, false)) {
                throw new Error(`Addon [${addon.identification}] has been installed!`);
            }
            yield this.syncSchema(addon);
            yield this.settingService.setSetting(`addon.${addon.identification}.installed`, "1");
            yield this.loadInjections(true);
            return {
                message: `Install addon [${addon.identification}] successfully!`,
            };
        });
    }
    uninstallAddon(identification) {
        return __awaiter(this, void 0, void 0, function* () {
            const addon = yield this.getAddon(identification);
            if (!addon) {
                throw new Error("Addon do not exists!");
            }
            if (!(yield this.settingService.get(`addon.${addon.identification}.installed`, false))) {
                throw new Error(`Addon [${addon.identification}] is not installed!`);
            }
            yield this.settingService.setSetting(`addon.${addon.identification}.installed`, "0");
            yield this.loadInjections(true);
            return {
                message: `Uninstall addon [${addon.identification}] successfully!`,
            };
        });
    }
    dropSchema(addon) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = get_package_path_by_addon_1.getPackagePathByAddon(addon);
            if (path.length) {
                const builder = new builders_1.SchemaBuilder();
                builder.buildMetadatas([
                    path_1.join(path, "*/*.entity.js"),
                    path_1.join(path, "**/*.entity.js"),
                ]);
                yield builder.drop();
            }
        });
    }
    loadEnabledAddons() {
        const path = path_1.join(process.cwd(), "storages", "addons", "enabled.yaml");
        let exits = [];
        if (fs_1.existsSync(path)) {
            exits = js_yaml_1.safeLoad(fs_1.readFileSync(path).toString());
            if (!exits) {
                exits = [];
            }
        }
        const enabled = this.addons.filter((addon) => {
            return addon.enabled === true;
        }).map((addon) => {
            return addon.location;
        });
        if (exits.filter(data => {
            return enabled.indexOf(data) === -1;
        }).length || enabled.filter(data => {
            return exits.indexOf(data) === -1;
        }).length) {
            fs_1.writeFileSync(path, js_yaml_1.safeDump(enabled));
        }
    }
    loadInjections(reload = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (reload) {
                this.addons.splice(0, this.addons.length);
            }
            const injections = this.injectionService
                .loadInjections()
                .filter((injection) => {
                return injection_constants_1.InjectionType.Addon === Reflect.getMetadata("__injection_type__", injection.target);
            });
            for (let i = 0; i < injections.length; i++) {
                const injection = injections[i];
                const identification = Reflect.getMetadata("identification", injection.target);
                this.addons.push({
                    authors: Reflect.getMetadata("authors", injection.target),
                    description: Reflect.getMetadata("description", injection.target),
                    enabled: yield this.settingService.get(`addon.${identification}.enabled`, false),
                    identification: identification,
                    installed: yield this.settingService.get(`addon.${identification}.installed`, false),
                    location: injection.location,
                    name: Reflect.getMetadata("name", injection.target),
                    version: Reflect.getMetadata("version", injection.target),
                });
            }
            this.loadEnabledAddons();
            this.initialized = true;
        });
    }
    syncSchema(addon) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = get_package_path_by_addon_1.getPackagePathByAddon(addon);
            if (path.length) {
                const builder = new builders_1.SchemaBuilder();
                builder.buildMetadatas([
                    path_1.join(path, "*/*.entity.js"),
                    path_1.join(path, "**/*.entity.js"),
                ]);
                yield builder.sync();
            }
        });
    }
};
AddonService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [injection_service_1.InjectionService,
        setting_service_1.SettingService])
], AddonService);
exports.AddonService = AddonService;
