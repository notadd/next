import { DashboardService } from "../services/dashboard.service";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
export declare class DashboardModule implements OnModuleInit {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    onModuleInit(): void;
}
