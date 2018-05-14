import { MiddlewareConsumer } from "@nestjs/common";
import { GraphqlFactory } from "../factories";
export declare class GraphqlModule {
    private readonly graphqlFactory;
    private configuration;
    constructor(graphqlFactory: GraphqlFactory);
    configure(consumer: MiddlewareConsumer): void;
    createSchema(): any;
}
