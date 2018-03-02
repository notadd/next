import { Query, Resolver } from "@nestjs/graphql";
import { Page } from "../types";
import { PageService } from "../services";

@Resolver("Page")
export class PageResolvers {
    /**
     * @param { PageService } pageService
     */
    constructor(private readonly pageService: PageService) {
    }

    /**
     * @param context
     * @param { {identification: string} } args
     *
     * @returns {Page | undefined}
     */
    @Query()
    public getPage(context, args: { identification: string }): Page | undefined {
        return this.pageService.getPage(args.identification);
    }

    /**
     * @returns { Array<Page> }
     */
    @Query()
    public getPages(): Array<Page> {
        return this.pageService.getPages();
    }
}
