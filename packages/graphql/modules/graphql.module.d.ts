import { GraphqlFactory } from "../factories";
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
export declare class GraphqlModule {
    private readonly graphQLFactory;
    constructor(graphQLFactory: GraphqlFactory);
    configure(consumer: MiddlewaresConsumer): void;
    createSchema(): any;
}
