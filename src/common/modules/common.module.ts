import { Module } from "@nestjs/common";
import { SettingService } from "../services/setting.service";
import { ConfigurationService } from "../services/configuration.service";
import { LogService } from "../services/log.service";

@Module({
    components: [
        ConfigurationService,
        LogService,
        SettingService,
    ],
})
export class CommonModule {

}
