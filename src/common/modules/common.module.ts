import { Module } from "@nestjs/common";
import { SettingService } from "../services/setting.service";
import { ConfigurationService } from "../services/configuration.service";
import { LogService } from "../services/log.service";
import { DatabaseModule } from "./database.module";
import { repositoryProvider } from "../providers/repository.provider";
import { AuthModule } from "./auth.module";

@Module({
    components: [
        ...repositoryProvider,
        ConfigurationService,
        LogService,
        SettingService,
    ],
    modules: [
        AuthModule,
        DatabaseModule,
    ],
})
export class CommonModule {
}
