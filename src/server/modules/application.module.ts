import { BackendModule } from '@notadd/backend';
import { Module, RequestMethod } from '@nestjs/common';
import { UserModule } from '@notadd/user';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { AuthenticationModule } from '@notadd/authentication';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigurationModule } from "../../configuration/modules/configuration.module";
import { LogModule } from "@notadd/logger";
import { SettingModule } from "@notadd/setting";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule,
        ConfigurationModule,
        LogModule,
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
