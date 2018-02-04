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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
let SettingService = class SettingService {
    constructor(repository) {
        this.repository = repository;
        this.isInitialized = false;
        this.settings = [];
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isInitialized) {
                yield this.initialize();
            }
            return this.settings;
        });
    }
    getSettingByKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isInitialized) {
                yield this.initialize();
            }
            return this.settings.find((setting) => {
                return setting.key == key;
            });
        });
    }
    removeSetting(key) {
        return __awaiter(this, void 0, void 0, function* () {
            let setting = yield this.getSettingByKey(key);
            if (typeof setting == "undefined") {
                throw new Error(`Setting dot not exists with key ${key}`);
            }
            else {
                yield this.repository.delete({
                    key: setting.key,
                });
                yield this.initialize();
            }
            return setting;
        });
    }
    setSetting(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            let setting = yield this.getSettingByKey(key);
            if (typeof setting == "undefined") {
                setting = yield this.repository.create({
                    key: key,
                    value: value,
                });
            }
            else {
                setting.value = value;
            }
            yield this.repository.save(setting);
            yield this.initialize();
            return setting;
        });
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = yield this.repository.find();
            this.isInitialized = true;
        });
    }
};
SettingService = __decorate([
    common_1.Component(),
    __param(0, typeorm_1.InjectRepository(entities_1.Setting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SettingService);
exports.SettingService = SettingService;
