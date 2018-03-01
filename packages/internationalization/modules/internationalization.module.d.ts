import { InternationalizationExplorerService, InternationalizationService } from "../services";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
export declare class InternationalizationModule implements OnModuleInit {
    private readonly internationalizationExplorerService;
    private readonly internationalizationService;
    constructor(internationalizationExplorerService: InternationalizationExplorerService, internationalizationService: InternationalizationService);
    onModuleInit(): void;
}
