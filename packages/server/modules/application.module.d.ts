import { GraphqlFactory } from "@notadd/core/factories/graphql.factory";
import { MiddlewaresConsumer } from "@nestjs/common";
export declare class ApplicationModule {
    private readonly graphQLFactory;
    constructor(graphQLFactory: GraphqlFactory);
    configure(consumer: MiddlewaresConsumer): void;
    createSchema(): any;
}
