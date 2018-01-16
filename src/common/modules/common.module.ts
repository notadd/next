import { Module } from "@nestjs/common";
import { ConfigurationService } from "../services/configuration.service";
import { LogModule } from "./log.module";
import { SettingModule } from "./setting.module";

@Module({
    components: [
        ConfigurationService,
    ],
    modules: [
        LogModule,
        SettingModule,
    ],
})
export class CommonModule {
}
