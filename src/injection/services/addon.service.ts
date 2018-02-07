import { Component } from "@nestjs/common";
import { SettingService } from "@notadd/setting/services/setting.service";

@Component()
export class AddonService {
    constructor(private readonly settingService: SettingService) {
    }
}
