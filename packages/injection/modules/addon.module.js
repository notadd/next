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
const injection_constants_1 = require("@notadd/core/constants/injection.constants");
const common_1 = require("@nestjs/common");
const setting_service_1 = require("@notadd/setting/services/setting.service");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
const utilities_1 = require("../utilities");
const metadatas_1 = require("../metadatas");
let AddonModule = class AddonModule {
    constructor(settingService) {
        this.settingService = settingService;
        this.logger = new common_1.Logger("NotaddAddon", true);
    }
    onModuleInitWithInjection() {
        return __awaiter(this, void 0, void 0, function* () {
            const settings = yield this.settingService.getSettings();
            return utilities_1.importClassesFromDirectories(["**/*.injection.js"])
                .filter(instance => {
                if (instance instanceof Function) {
                    return instance.identification.length
                        && instance.module
                        && instance.type.length
                        && instance.type == injection_constants_1.InjectionType.Addon;
                }
                return false;
            }).map(instance => {
                const metadata = new metadatas_1.InjectionMetadata();
                metadata.identification = instance.identification;
                metadata.module = instance.module;
                metadata.type = instance.type;
                return metadata;
            });
        });
    }
};
AddonModule = __decorate([
    common_1.Module({
        imports: [
            setting_module_1.SettingModule,
        ],
    }),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], AddonModule);
exports.AddonModule = AddonModule;
