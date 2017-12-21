import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";

@Module({
    components: [
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
