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
const GraphQLJSON = require("graphql-type-json");
const graphql_1 = require("@nestjs/graphql");
const apollo_server_express_1 = require("apollo-server-express");
const factories_1 = require("../factories");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let GraphqlModule = class GraphqlModule {
    constructor(graphQLFactory) {
        this.graphQLFactory = graphQLFactory;
        this.configuration = require(path_1.join(process.cwd(), "configurations", "graphql.json"));
    }
    configure(consumer) {
        const schema = this.createSchema();
        if (this.configuration.ide) {
            consumer
                .apply(apollo_server_express_1.graphiqlExpress({ endpointURL: "/graphql" }))
                .forRoutes({ path: "/graphiql", method: common_1.RequestMethod.GET });
        }
        consumer
            .apply(apollo_server_express_1.graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes({ path: `/${this.configuration.endpoint}`, method: common_1.RequestMethod.ALL });
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
};
GraphqlModule = __decorate([
    common_1.Module({
        components: [
            factories_1.GraphqlFactory,
        ],
        imports: [
            graphql_1.GraphQLModule,
        ],
    }),
    __metadata("design:paramtypes", [factories_1.GraphqlFactory])
], GraphqlModule);
exports.GraphqlModule = GraphqlModule;
