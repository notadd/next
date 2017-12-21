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
const application_controller_1 = require("../controllers/application.controller");
const backend_1 = require("@notadd/backend");
const common_1 = require("@nestjs/common");
const user_1 = require("@notadd/user");
const graphql_1 = require("@nestjs/graphql");
const graphql_tools_1 = require("graphql-tools");
const mergeSchemas_1 = require("graphql-tools/dist/stitching/mergeSchemas");
const apollo_server_express_1 = require("apollo-server-express");
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
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });
        const delegates = this.graphQLFactory.createDelegates();
        const { humanSchema, linkTypeDefs } = this.createDelegatedSchema();
        return mergeSchemas_1.default({
            schemas: [schema, humanSchema, linkTypeDefs],
            resolvers: delegates,
        });
    }
    createDelegatedSchema() {
        const linkTypeDefs = `
            extend type Cat {
                human: Human
            }
        `;
        const humanSchema = graphql_tools_1.makeExecutableSchema({
            typeDefs: `
                type Human {
                    id: ID!
                }
                type Query {
                    humanById(id: ID!): Human
                }
            `,
        });
        graphql_tools_1.addMockFunctionsToSchema({ schema: humanSchema });
        return { humanSchema, linkTypeDefs };
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        modules: [
            backend_1.BackendModule,
            graphql_1.GraphQLModule,
            user_1.UserModule
        ],
        controllers: [
            application_controller_1.ApplicationController,
        ],
        components: [],
    }),
    __metadata("design:paramtypes", [graphql_1.GraphQLFactory])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
