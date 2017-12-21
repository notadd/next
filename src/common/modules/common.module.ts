import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";
import { ConfigurationService } from "../services/configuration.service";
import { LogService } from "../services/log.service";
import { Log } from "../entities/log.entity";
import { DatabaseModule } from "./database.module";

@Module({
    components: [
        ConfigurationService,
        LogService,
        SettingService,
    ],
    modules: [
        DatabaseModule,
        TypeOrmModule.forRoot([
            Log,
            Setting,
        ]),
    ],
})
export class CommonModule {

}
