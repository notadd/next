import { AuthenticationModule } from "@notadd/authentication";
import { BackendModule } from "@notadd/backend";
import { ConfigurationModule } from "@notadd/configuration";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { GraphQLModule } from "@nestjs/graphql";
import { InjectionModule } from "@notadd/injection";
import { LoggerModule } from "@notadd/logger";
import { MiddlewaresConsumer, Module, RequestMethod } from "@nestjs/common";
import { SettingModule } from "@notadd/setting";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "@notadd/user";
import { WebsocketModule } from "@notadd/websocket";
import { mergeTypes } from 'merge-graphql-schemas';
import { GraphqlFactory } from "@notadd/core/factories/graphql.factory";
import * as GraphQLJSON from 'graphql-type-json';
import { Informations } from "@notadd/core/informations";

@Module({
    components: [
        ...Informations,
        GraphqlFactory,
    ],
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule,
        WebsocketModule,
        ConfigurationModule,
        LoggerModule,
        SettingModule,
        InjectionModule,
        BackendModule,
        UserModule,
        AuthenticationModule,
    ],
})
export class ApplicationModule {
    constructor(private readonly graphQLFactory: GraphqlFactory) {
    }

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
