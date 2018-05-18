import * as GraphQLJSON from "graphql-type-json";
import { Configuration } from "@notadd/core/loaders";
import { GraphQLModule } from "@nestjs/graphql";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { GraphqlConfiguration } from "@notadd/core/configurations/graphql.configuration";
import { GraphqlFactory } from "../factories";
import * as bodyParse from "body-parser";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";

@Module({
    imports: [
        GraphQLModule,
    ],
    providers: [
        GraphqlFactory,
    ],
})
export class GraphqlModule {
    private configuration: GraphqlConfiguration = Configuration.loadGraphqlConfiguration();

    /**
     * @param { GraphqlFactory } graphqlFactory
     */
    constructor(private readonly graphqlFactory: GraphqlFactory) {
    }

    /**
     * @param { MiddlewareConsumer } consumer
     */
    configure(consumer: MiddlewareConsumer) {
        const schema = this.createSchema();
        if (this.configuration.ide.enable) {
            consumer
                .apply(graphiqlExpress({ endpointURL: `/${this.configuration.endpoint}` }))
                .forRoutes(`/${this.configuration.ide.endpoint}`);
        }
        consumer
            .apply(bodyParse.json())
            .forRoutes(`/${this.configuration.endpoint}`)
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes(`/${this.configuration.endpoint}`);
    }

    createSchema() {
        const paths: Array<string> = this.configuration.paths.concat([
        ]);
        const typeDefs = this.graphqlFactory.mergeTypesFromPaths(paths);

        return this.graphqlFactory.createSchema({
            typeDefs,
            resolvers: {
                Json: GraphQLJSON,
            },
        });
    }
}
