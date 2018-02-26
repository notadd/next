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
const information_decorator_1 = require("@notadd/core/decorators/information.decorator");
const os_1 = require("os");
let SystemInformation = class SystemInformation {
    nodeVersion() {
        return process.version;
    }
    systemPlatform() {
        return os_1.platform();
    }
    systemRelease() {
        return os_1.release();
    }
};
__decorate([
    information_decorator_1.Information("node-version"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SystemInformation.prototype, "nodeVersion", null);
__decorate([
    information_decorator_1.Information("system-platform"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SystemInformation.prototype, "systemPlatform", null);
__decorate([
    information_decorator_1.Information("system-release"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SystemInformation.prototype, "systemRelease", null);
SystemInformation = __decorate([
    common_1.Component()
], SystemInformation);
exports.SystemInformation = SystemInformation;
