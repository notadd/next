import { Module } from "@nestjs/common";
import { Setting } from "../entities";
import { SettingResolvers } from "../resolvers";
import { SettingService } from "../services";
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
        TypeOrmModule.forFeature([
            Setting,
        ]),
    ]
})
export class SettingModule {
}
