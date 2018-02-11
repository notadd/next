import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class DashboardService {
    constructor(private readonly settingService: SettingService) {
    }
}
