import { Module } from "@nestjs/common";
import { SettingService } from "../services/setting.service";
import { ConfigurationService } from "../services/configuration.service";
import { LogService } from "../services/log.service";
import { DatabaseModule } from "./database.module";
import { repositoryProvider } from "../providers/repository.provider";

@Module({
    components: [
        // ...repositoryProvider,
        ConfigurationService,
        LogService,
        SettingService,
    ],
})
export class CommonModule {

}
