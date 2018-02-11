import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";
import { DashboardMetadata } from "../interfaces/dashboard-metadata.interface";
import { Dashboard } from "../types/dashboard.type";

@Component()
export class DashboardService {
    private initialized: boolean = false;

    private dashboards: Array<Dashboard> = [];

    constructor(private readonly settingService: SettingService) {
    }

    public initialize(metadatas: Array<DashboardMetadata>) {
        this.dashboards = metadatas.map(metadata => {
            return {
                data: metadata.callback ? metadata.callback() : [],
                name: metadata.name,
            };
        });
        console.log(this.dashboards);
        this.initialized = true;
    }
}
