import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";
import { ConfigurationService } from "../services/configuration.service";
import { LogService } from "../services/log.service";

@Module({
    components: [
        ConfigurationService,
        LogService,
        SettingService,
    ],
    modules: [
        TypeOrmModule.forRoot([
            Setting,
        ]),
    ],
})
export class CommonModule {

}
