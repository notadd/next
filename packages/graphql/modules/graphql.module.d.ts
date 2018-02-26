import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { GraphqlFactory } from "../factories";
export declare class GraphqlModule {
    private readonly graphQLFactory;
    constructor(graphQLFactory: GraphqlFactory);
    configure(consumer: MiddlewaresConsumer): void;
    createSchema(): any;
}
