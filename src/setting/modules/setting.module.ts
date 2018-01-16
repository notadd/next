import { Module } from "@nestjs/common";
import { Setting } from "../entities/setting.entity";
import { SettingResolvers } from "../resolvers/setting.resolvers";
import { SettingService } from "../services/setting.service";
import { TypeOrmModule } from "@nestjs/typeorm";

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
