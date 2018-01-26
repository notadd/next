"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@notadd/authentication");
const backend_1 = require("@notadd/backend");
const configuration_1 = require("@notadd/configuration");
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("@nestjs/graphql");
const logger_1 = require("@notadd/logger");
const common_1 = require("@nestjs/common");
const setting_1 = require("@notadd/setting");
const typeorm_1 = require("@nestjs/typeorm");
const user_1 = require("@notadd/user");
const websocket_1 = require("@notadd/websocket");
let ApplicationModule = class ApplicationModule {
    constructor(graphQLFactory) {
        this.graphQLFactory = graphQLFactory;
    }
    configure(consumer) {
        const schema = this.createSchema();
        consumer
            .apply(apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' }))
            .forRoutes({ path: '/graphiql', method: common_1.RequestMethod.GET })
            .apply(apollo_server_express_1.graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes({ path: '/graphql', method: common_1.RequestMethod.ALL });
    }
    createSchema() {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.types.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });
        return this.graphQLFactory.createSchema({ typeDefs });
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            graphql_1.GraphQLModule,
            websocket_1.WebsocketModule,
            configuration_1.ConfigurationModule,
            logger_1.LoggerModule,
            setting_1.SettingModule,
            backend_1.BackendModule,
            user_1.UserModule,
            authentication_1.AuthenticationModule,
        ],
    }),
    __metadata("design:paramtypes", [graphql_1.GraphQLFactory])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
