import { PageService } from "../services/page.service";
import { Page } from "../types/page.type";
export declare class PageResolvers {
    private readonly pageService;
    constructor(pageService: PageService);
    getPage(context: any, args: {
        identification: string;
    }): Page | undefined;
    getPages(): Array<Page>;
}
