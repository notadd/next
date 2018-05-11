import { Module } from "@nestjs/common";
import { Setting } from "../entities";
import { SettingResolvers } from "../resolvers";
import { SettingService } from "../services";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    exports: [
        SettingService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            Setting,
        ]),
    ],
    providers: [
        SettingResolvers,
        SettingService,
    ]
})
export class SettingModule {
}
