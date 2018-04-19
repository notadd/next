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
const setting_service_1 = require("@notadd/setting/services/setting.service");
let PageService = class PageService {
    constructor(settingService) {
        this.settingService = settingService;
        this.initialized = false;
        this.pages = [];
    }
    getPage(identification) {
        return this.pages.find(page => {
            return page.identification === identification;
        });
    }
    getPages() {
        return this.pages;
    }
    initialize(metadatas) {
        this.pages = metadatas
            .filter(metadata => {
            return metadata.form
                && metadata.identification
                && metadata.name
                && metadata.schema;
        })
            .map(metadata => {
            return {
                description: metadata.description ? metadata.description : "",
                form: metadata.form && metadata.form.callback ? metadata.form.callback() : [],
                identification: metadata.identification ? metadata.identification : "",
                name: metadata.name ? metadata.name : "",
                schema: metadata.schema && metadata.schema.callback ? metadata.schema.callback() : {},
            };
        });
        this.initialized = true;
    }
};
PageService = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], PageService);
exports.PageService = PageService;

//# sourceMappingURL=page.service.js.map
