import * as GraphQLJSON from 'graphql-type-json';
import { GraphQLModule } from "@nestjs/graphql";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { GraphqlFactory } from "../factories";
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { Module, RequestMethod } from "@nestjs/common";

@Module({
    components: [
        GraphqlFactory,
    ],
    imports: [
        GraphQLModule,
    ],
})
export class GraphqlModule {
    /**
     * @param { GraphqlFactory } graphQLFactory
     */
    constructor(private readonly graphQLFactory: GraphqlFactory) {
    }

    /**
     * @param { MiddlewaresConsumer } consumer
     */
    configure(consumer: MiddlewaresConsumer) {
        const schema = this.createSchema();
        consumer
            .apply(graphiqlExpress({ endpointURL: "/graphql" }))
            .forRoutes({ path: "/graphiql", method: RequestMethod.GET })
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes({ path: "/graphql", method: RequestMethod.ALL });
    }

    createSchema() {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths("./**/*.types.graphql");

        return this.graphQLFactory.createSchema({
            typeDefs,
            resolvers: {
                Json: GraphQLJSON,
            },
        });
    }
}
