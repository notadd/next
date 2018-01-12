import { BackendModule } from '@notadd/backend';
import { Module, RequestMethod } from '@nestjs/common';
import { UserModule } from '@notadd/user';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { CommonModule } from '@notadd/common';
import { AuthenticationModule } from '@notadd/authentication';

@Module({
    components: [
    ],
    imports: [
        CommonModule,
        GraphQLModule,
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
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });
        return this.graphQLFactory.createSchema({ typeDefs });
    }
}
