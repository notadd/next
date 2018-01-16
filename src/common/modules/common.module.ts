import { Module } from "@nestjs/common";
import { ConfigurationService } from "../services/configuration.service";
import { DatabaseModule } from "./database.module";
import { LogModule } from "./log.module";
import { SettingModule } from "./setting.module";

@Module({
    components: [
        ConfigurationService,
    ],
    modules: [
        // DatabaseModule,
        LogModule,
        SettingModule,
    ],
})
export class CommonModule {
}
