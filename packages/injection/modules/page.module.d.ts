import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { PageService } from "../services";
import { PageExplorerService } from "../services";
export declare class PageModule implements OnModuleInit {
    private readonly pageExplorerService;
    private readonly pageService;
    constructor(pageExplorerService: PageExplorerService, pageService: PageService);
    onModuleInit(): void;
}
