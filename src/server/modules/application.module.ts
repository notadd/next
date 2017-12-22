import { ApplicationController } from '../controllers/application.controller';
import { BackendModule } from '@notadd/backend';
import { Module, RequestMethod } from '@nestjs/common';
import { UserModule } from '@notadd/user';
import { GraphQLFactory, GraphQLModule } from "@nestjs/graphql";
import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";
import mergeSchemas from "graphql-tools/dist/stitching/mergeSchemas";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { MiddlewaresConsumer } from "@nestjs/common/interfaces/middlewares";
import { CommonModule } from "@notadd/common";

@Module({
    modules: [
        BackendModule,
        CommonModule,
        GraphQLModule,
        UserModule
    ],
    controllers: [
        ApplicationController,
    ],
    components: [],
})
export class ApplicationModule {
    constructor(private readonly graphQLFactory: GraphQLFactory) {
    }

    configure(consumer: MiddlewaresConsumer) {
        const schema = this.createSchema();
        consumer
            .apply(graphiqlExpress({ endpointURL: '/graphql' }))
            .forRoutes({ path: '/graphiql', method: RequestMethod.GET })
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes({ path: '/graphql', method: RequestMethod.ALL });
    }

    createSchema() {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });

        const delegates = this.graphQLFactory.createDelegates();
        const { humanSchema, linkTypeDefs } = this.createDelegatedSchema();
        return mergeSchemas({
            schemas: [ schema, humanSchema, linkTypeDefs ],
            resolvers: delegates,
        });
    }

    createDelegatedSchema() {
        const linkTypeDefs = `
            extend type Cat {
                human: Human
            }
        `;
        const humanSchema = makeExecutableSchema({
            typeDefs: `
                type Human {
                    id: ID!
                }
                type Query {
                    humanById(id: ID!): Human
                }
            `,
        });
        addMockFunctionsToSchema({ schema: humanSchema });

        return { humanSchema, linkTypeDefs };
    }
}
