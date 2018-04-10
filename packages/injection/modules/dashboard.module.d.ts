import { DashboardExplorerService, DashboardService } from "../services";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
export declare class DashboardModule implements OnModuleInit {
    private readonly dashboardExplorerService;
    private readonly dashboardService;
    constructor(dashboardExplorerService: DashboardExplorerService, dashboardService: DashboardService);
    onModuleInit(): void;
}
