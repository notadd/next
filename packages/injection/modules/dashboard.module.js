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
const dashboard_service_1 = require("../services/dashboard.service");
const dashboard_resolvers_1 = require("../resolvers/dashboard.resolvers");
const dashboard_explorer_service_1 = require("../services/dashboard-explorer.service");
const metadata_scanner_1 = require("@nestjs/core/metadata-scanner");
const common_1 = require("@nestjs/common");
const setting_module_1 = require("../../setting/modules/setting.module");
let DashboardModule = class DashboardModule {
    constructor(dashboardExplorerService, dashboardService) {
        this.dashboardExplorerService = dashboardExplorerService;
        this.dashboardService = dashboardService;
    }
    onModuleInit() {
        this.dashboardService.initialize(this.dashboardExplorerService.explore());
    }
};
DashboardModule = __decorate([
    common_1.Module({
        components: [
            dashboard_explorer_service_1.DashboardExplorerService,
            dashboard_resolvers_1.DashboardResolvers,
            dashboard_service_1.DashboardService,
            metadata_scanner_1.MetadataScanner,
        ],
        imports: [
            setting_module_1.SettingModule,
        ],
    }),
    __metadata("design:paramtypes", [dashboard_explorer_service_1.DashboardExplorerService,
        dashboard_service_1.DashboardService])
], DashboardModule);
exports.DashboardModule = DashboardModule;
