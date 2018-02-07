import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class ExtensionService {
    constructor(private readonly settingService: SettingService) {
    }
}
