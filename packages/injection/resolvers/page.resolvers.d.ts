import { Page } from "../types";
import { PageService } from "../services";
export declare class PageResolvers {
    private readonly pageService;
    constructor(pageService: PageService);
    getPage(context: any, args: {
        identification: string;
    }): Page | undefined;
    getPages(): Array<Page>;
}
