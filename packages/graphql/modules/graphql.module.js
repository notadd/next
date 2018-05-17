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
const loaders_1 = require("@notadd/core/loaders");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const factories_1 = require("../factories");
const servers_1 = require("../servers");
let GraphqlModule = class GraphqlModule {
    constructor(graphqlFactory) {
        this.graphqlFactory = graphqlFactory;
        this.configuration = loaders_1.Configuration.loadGraphqlConfiguration();
    }
    configure(consumer) {
        const schema = this.createSchema();
        if (this.configuration.ide.enable) {
            consumer
                .apply(servers_1.graphiqlServer({ endpointURL: `/${this.configuration.endpoint}` }))
                .forRoutes(`/${this.configuration.ide.endpoint}`);
        }
        consumer
            .apply(servers_1.graphqlServer({ schema }))
            .forRoutes(`/${this.configuration.endpoint}`);
    }
    createSchema() {
        const paths = this.configuration.paths.concat([]);
        const typeDefs = this.graphqlFactory.mergeTypesFromPaths(paths);
        return this.graphqlFactory.createSchema({
            typeDefs,
            resolvers: {
                Json: GraphQLJSON,
            },
        });
    }
};
GraphqlModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule,
        ],
        providers: [
            factories_1.GraphqlFactory,
        ],
    }),
    __metadata("design:paramtypes", [factories_1.GraphqlFactory])
], GraphqlModule);
exports.GraphqlModule = GraphqlModule;

//# sourceMappingURL=graphql.module.js.map
