import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class WorkflowExplorerService {
    /**
     * @param { SettingService } settingService
     */
    constructor(private readonly settingService: SettingService) {
    }

    public explore() {

    }
}
