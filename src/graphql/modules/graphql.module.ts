import * as GraphQLJSON from "graphql-type-json";
import { Configuration } from "@notadd/core/loaders";
import { GraphQLModule } from "@nestjs/graphql";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { GraphqlFactory } from "../factories";
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { Module } from "@nestjs/common";
import { GraphqlConfiguration } from "@notadd/core/configurations/graphql.configuration";

@Module({
    components: [
        GraphqlFactory,
    ],
    imports: [
        GraphQLModule,
    ],
})
export class GraphqlModule {
    private configuration: GraphqlConfiguration = Configuration.loadGraphqlConfiguration();

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
        if (this.configuration.ide.enable) {
            consumer
                .apply(graphiqlExpress({ endpointURL: `/${this.configuration.endpoint}` }))
                .forRoutes(this.configuration.ide.endpoint);
        }
        consumer
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes(this.configuration.endpoint);
    }

    createSchema() {
        const paths: Array<string> = this.configuration.paths.concat([
        ]);
        const typeDefs = this.graphQLFactory.mergeTypesByPaths(paths);

        return this.graphQLFactory.createSchema({
            typeDefs,
            resolvers: {
                Json: GraphQLJSON,
            },
        });
    }
}
