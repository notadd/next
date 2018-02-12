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
const page_decorator_1 = require("../decorators/page.decorator");
let ConfigurationPage = class ConfigurationPage {
    form() {
        return [];
    }
    schema() {
        return {};
    }
};
__decorate([
    page_decorator_1.Form(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationPage.prototype, "form", null);
__decorate([
    page_decorator_1.Schema(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConfigurationPage.prototype, "schema", null);
ConfigurationPage = __decorate([
    page_decorator_1.Page({
        description: "",
        name: "configuration",
    })
], ConfigurationPage);
exports.ConfigurationPage = ConfigurationPage;
