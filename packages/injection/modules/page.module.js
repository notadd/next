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
const setting_module_1 = require("@notadd/setting/modules/setting.module");
const page_explorer_service_1 = require("../services/page-explorer.service");
const page_service_1 = require("../services/page.service");
const page_resolvers_1 = require("../resolvers/page.resolvers");
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
            page_explorer_service_1.PageExplorerService,
            page_resolvers_1.PageResolvers,
            page_service_1.PageService,
        ],
    }),
    __metadata("design:paramtypes", [page_explorer_service_1.PageExplorerService,
        page_service_1.PageService])
], PageModule);
exports.PageModule = PageModule;

//# sourceMappingURL=page.module.js.map
