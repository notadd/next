import { Module } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { PageService } from "../services";
import { PageExplorerService } from "../services";
import { PageResolvers } from "../resolvers";
import { SettingModule } from "@notadd/setting/modules/setting.module";

@Module({
    components: [
        MetadataScanner,
        PageExplorerService,
        PageResolvers,
        PageService,
    ],
    imports: [
        SettingModule,
    ],
})
export class PageModule implements OnModuleInit {
    /**
     * @param { PageExplorerService } pageExplorerService
     * @param { PageService } pageService
     */
    constructor(
        private readonly pageExplorerService: PageExplorerService,
        private readonly pageService: PageService,
    ) {

    }

    onModuleInit(): void {
        this.pageService.initialize(this.pageExplorerService.explore());
    }
}
