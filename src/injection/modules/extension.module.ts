import { Module } from "@nestjs/common";
import { SettingModule } from "@notadd/setting/modules/setting.module";

import { ExtensionService } from "../services/extension.service";
import { ExtensionResolvers } from "../resolvers/extension.resolvers";

@Module({
    exports: [
        ExtensionService,
    ],
    imports: [
        SettingModule,
    ],
    providers: [
        ExtensionService,
        ExtensionResolvers,
    ],
})
export class ExtensionModule {
}
