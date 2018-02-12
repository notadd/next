import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
import { Dashboard } from "../types/dashboard.type";

@Component()
export class DashboardService {
    private initialized: boolean = false;

    private dashboards: Array<Dashboard> = [];

    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
    }

    /**
     * @param { string } name
     *
     * @returns { Dashboard }
     */
    public getDashboard(name: string): Dashboard {
        return this.dashboards.find(dashboard => dashboard.name == name);
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
