import { Injectable } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";

import { Dashboard, DashboardMetadata } from "../interfaces";

@Injectable()
export class DashboardService {
    private initialized = false;

    private dashboards: Array<Dashboard> = [];

    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } name
     *
     * @returns { Dashboard | undefined }
     */
    public getDashboard(name: string): Dashboard | undefined {
        return this.dashboards.find(dashboard => dashboard.name === name);
    }

    /**
     * @returns { Array<Dashboard> }
     */
    public getDashboards(): Array<Dashboard> {
        return this.dashboards;
    }

    public initialize(metadatas: Array<DashboardMetadata>) {
        this.dashboards = metadatas.map(metadata => {
            return {
                data: metadata.callback ? metadata.callback() : [],
                name: metadata.name,
            };
        });
        this.initialized = true;
    }
}
