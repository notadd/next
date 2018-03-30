import * as GraphQLJSON from "graphql-type-json";
import { Configuration } from "@notadd/core/loaders";
import { GraphQLModule } from "@nestjs/graphql";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { GraphqlFactory } from "../factories";
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { Module, RequestMethod } from "@nestjs/common";
import { GraphqlConfiguration } from "@notadd/core/configurations/graphql.configuration";
import { join } from "path";

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
        this.configuration = require(join(process.cwd(), "configurations", "graphql.json"));
    }

    /**
     * @param { MiddlewaresConsumer } consumer
     */
    configure(consumer: MiddlewaresConsumer) {
        const schema = this.createSchema();
        if (this.configuration.ide.enable) {
            consumer
                .apply(graphiqlExpress({ endpointURL: `/${this.configuration.endpoint}` }))
                .forRoutes({ path: `/${this.configuration.ide.endpoint}`, method: RequestMethod.GET });
        }
        consumer
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes({ path: `/${this.configuration.endpoint}`, method: RequestMethod.ALL });
    }

    createSchema() {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths("**/*.types.graphql");

        return this.graphQLFactory.createSchema({
            typeDefs,
            resolvers: {
                Json: GraphQLJSON,
            },
        });
    }
}
