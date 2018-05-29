import { Page } from "../interfaces";
import { PageService } from "../services/page.service";
export declare class PageResolvers {
    private readonly pageService;
    constructor(pageService: PageService);
    getPage(context: any, args: {
        identification: string;
    }): Page | undefined;
    getPages(): Array<Page>;
}
