import { Module } from "@nestjs/common";
import { ConfigurationService } from "../services/configuration.service";
import { DatabaseModule } from "./database.module";
import { AuthModule } from "./auth.module";
import { LogModule } from "./log.module";
import { SettingModule } from "./setting.module";

@Module({
    components: [
        ConfigurationService,
    ],
    modules: [
        DatabaseModule,
        AuthModule,
        LogModule,
        SettingModule,
    ],
})
export class CommonModule {
}
