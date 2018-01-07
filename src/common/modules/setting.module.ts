import { Module } from "@nestjs/common";
import { repositoryProvider } from "../providers/repository.provider";
import { SettingResolvers } from "../resolvers/setting.resolvers";
import { SettingService } from "../services/setting.service";
import { DatabaseModule } from "./database.module";

@Module({
    components: [
        ...repositoryProvider,
        SettingResolvers,
        SettingService,
    ],
    imports: [
        DatabaseModule,
    ]
})
export class SettingModule {}
