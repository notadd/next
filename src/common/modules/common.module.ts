import { Module } from "@nestjs/common";
import { ConfigurationService } from "../services/configuration.service";
import { DatabaseModule } from "./database.module";
import { repositoryProvider } from "../providers/repository.provider";
import { AuthModule } from "./auth.module";
import { LogModule } from "./log.module";
import { SettingModule } from "./setting.module";

@Module({
    components: [
        ...repositoryProvider,
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
