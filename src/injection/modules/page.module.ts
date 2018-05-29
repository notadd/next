import { Module } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { SettingModule } from "@notadd/setting/modules/setting.module";

import { PageExplorerService } from "../services/page-explorer.service";
import { PageResolvers } from "../resolvers/page.resolvers";
import { PageService } from "../services/page.service";

@Module({
    imports: [
        SettingModule,
    ],
    providers: [
        MetadataScanner,
        PageExplorerService,
        PageResolvers,
        PageService,
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
