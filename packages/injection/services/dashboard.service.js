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
let DashboardService = class DashboardService {
    constructor(settingService) {
        this.settingService = settingService;
        this.initialized = false;
        this.dashboards = [];
    }
    getDashboard(name) {
        return this.dashboards.find(dashboard => dashboard.name === name);
    }
    getDashboards() {
        return this.dashboards;
    }
    initialize(metadatas) {
        this.dashboards = metadatas.map(metadata => {
            return {
                data: metadata.callback ? metadata.callback() : [],
                name: metadata.name,
            };
        });
        this.initialized = true;
    }
};
DashboardService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [setting_service_1.SettingService])
], DashboardService);
exports.DashboardService = DashboardService;

//# sourceMappingURL=dashboard.service.js.map
