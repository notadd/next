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
    async get(key, defaultValue) {
        const setting = await this.getSettingByKey(key);
        if (!setting) {
            return defaultValue;
        }
        let result;
        switch (typeof defaultValue) {
            case "boolean":
                result = setting.value === "1";
                break;
            case "string":
                result = setting.value;
                break;
            case "number":
                result = Number(setting.value);
                break;
            default:
                result = setting.value;
                break;
        }
        return result;
    }
    async getSettings() {
        if (!this.isInitialized) {
            await this.initialize();
        }
        return this.settings;
    }
    async getSettingByKey(key) {
        if (!this.isInitialized) {
            await this.initialize();
        }
        return this.settings.find((setting) => {
            return setting.key === key;
        });
    }
    async removeSetting(key) {
        const setting = await this.getSettingByKey(key);
        if (typeof setting === "undefined") {
            throw new Error(`Setting dot not exists with key ${key}`);
        }
        else {
            await this.repository.delete({
                key: setting.key,
            });
            await this.initialize();
        }
        return setting;
    }
    async setSetting(key, value) {
        let setting = await this.getSettingByKey(key);
        if (typeof setting === "undefined") {
            setting = await this.repository.create({
                key,
                value,
            });
        }
        else {
            setting.value = value;
        }
        await this.repository.save(setting);
        await this.initialize();
        return setting;
    }
    async initialize() {
        this.settings = await this.repository.find();
        this.isInitialized = true;
    }
};
SettingService = __decorate([
    common_1.Component(),
    __param(0, typeorm_1.InjectRepository(entities_1.Setting)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SettingService);
exports.SettingService = SettingService;

//# sourceMappingURL=setting.service.js.map
