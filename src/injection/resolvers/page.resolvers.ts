import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Page")
export class PageResolvers {
    @Query()
    public getPage() {

    }

    @Query()
    public getPages() {

    }
}
