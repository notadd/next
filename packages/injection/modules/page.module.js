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
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const services_1 = require("../services");
const resolvers_1 = require("../resolvers");
const setting_module_1 = require("@notadd/setting/modules/setting.module");
let PageModule = class PageModule {
    constructor(pageExplorerService, pageService) {
        this.pageExplorerService = pageExplorerService;
        this.pageService = pageService;
    }
    onModuleInit() {
        this.pageService.initialize(this.pageExplorerService.explore());
    }
};
PageModule = __decorate([
    common_1.Module({
        imports: [
            setting_module_1.SettingModule,
        ],
        providers: [
            metadata_scanner_1.MetadataScanner,
            services_1.PageExplorerService,
            resolvers_1.PageResolvers,
            services_1.PageService,
        ],
    }),
    __metadata("design:paramtypes", [services_1.PageExplorerService,
        services_1.PageService])
], PageModule);
exports.PageModule = PageModule;

//# sourceMappingURL=page.module.js.map
