import { Module } from "@nestjs/common";
import { settingRepositoryProvider } from "../providers/settingRepository.provider";
import { SettingResolvers } from "../resolvers/setting.resolvers";
import { SettingService } from "../services/setting.service";
import { DatabaseModule } from "./database.module";

@Module({
    components: [
        ...settingRepositoryProvider,
        SettingResolvers,
        SettingService,
    ],
    exports: [
        SettingService,
    ],
    imports: [
        DatabaseModule,
    ]
})
export class SettingModule {
}
