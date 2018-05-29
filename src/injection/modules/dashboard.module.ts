import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { Module } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { SettingModule } from "@notadd/setting/modules/setting.module";

import { DashboardExplorerService } from "../services/dashboard-explorer.service";
import { DashboardResolvers } from "../resolvers/dashboard.resolvers";
import { DashboardService } from "../services/dashboard.service";

@Module({
    imports: [
        SettingModule,
    ],
    providers: [
        DashboardExplorerService,
        DashboardService,
        DashboardResolvers,
        MetadataScanner,
    ],
})
export class DashboardModule implements OnModuleInit {
    /**
     * @param { DashboardExplorerService } dashboardExplorerService
     * @param { DashboardService } dashboardService
     */
    constructor(
        private readonly dashboardExplorerService: DashboardExplorerService,
        private readonly dashboardService: DashboardService,
    ) {
    }

    onModuleInit(): void {
        this.dashboardService.initialize(this.dashboardExplorerService.explore());
    }
}
