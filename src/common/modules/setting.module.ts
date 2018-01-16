import { Module } from "@nestjs/common";
import { SettingResolvers } from "../resolvers/setting.resolvers";
import { SettingService } from "../services/setting.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Setting } from "../entities/setting.entity";

@Module({
    components: [
        SettingResolvers,
        SettingService,
    ],
    exports: [
        SettingService,
    ],
    imports: [
        TypeOrmModule.forFeature([Setting]),
    ]
})
export class SettingModule {
}
