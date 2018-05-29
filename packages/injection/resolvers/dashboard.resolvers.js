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
const graphql_1 = require("@nestjs/graphql");
const dashboard_service_1 = require("../services/dashboard.service");
let DashboardResolvers = class DashboardResolvers {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    getDashboard(context, args) {
        return this.dashboardService.getDashboard(args.name);
    }
    getDashboards() {
        return this.dashboardService.getDashboards();
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], DashboardResolvers.prototype, "getDashboard", null);
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DashboardResolvers.prototype, "getDashboards", null);
DashboardResolvers = __decorate([
    graphql_1.Resolver("Dashboard"),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardResolvers);
exports.DashboardResolvers = DashboardResolvers;

//# sourceMappingURL=dashboard.resolvers.js.map
