import { Module } from "@nestjs/common";
import { InternationalizationResolvers } from "../resolvers";
import { InternationalizationExplorerService, InternationalizationService } from "../services";
import { MetadataScanner } from "@nestjs/core/metadata-scanner";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";

@Module({
    components: [
        InternationalizationExplorerService,
        InternationalizationResolvers,
        InternationalizationService,
        MetadataScanner,
    ],
})
export class InternationalizationModule implements OnModuleInit {
    constructor(
        private readonly internationalizationExplorerService: InternationalizationExplorerService,
        private readonly internationalizationService: InternationalizationService,
    ) {
    }

    public onModuleInit(): void {
        this.internationalizationService.initialize(this.internationalizationExplorerService.explore());
    }
}
