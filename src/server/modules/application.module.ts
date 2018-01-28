import { AuthenticationModule } from '@notadd/authentication';
import { BackendModule } from '@notadd/backend';
import { ConfigurationModule } from "@notadd/configuration";
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from "@notadd/logger";
import { MiddlewaresConsumer, Module, RequestMethod } from '@nestjs/common';
import { SettingModule } from "@notadd/setting";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from '@notadd/user';
import { WebsocketModule } from "@notadd/websocket";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule,
        WebsocketModule,
        ConfigurationModule,
        LoggerModule,
        SettingModule,
        BackendModule,
        UserModule,
        AuthenticationModule,
    ],
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
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.types.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });

        return this.graphQLFactory.createSchema({ typeDefs });
    }
}
