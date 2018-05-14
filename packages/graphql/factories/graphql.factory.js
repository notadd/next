"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const glob = require("glob");
const common_1 = require("@nestjs/common");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const graphql_1 = require("@nestjs/graphql");
let GraphqlFactory = class GraphqlFactory extends graphql_1.GraphQLFactory {
    loadTypesFromFiles(pattern) {
        const paths = glob.sync(pattern);
        return paths.map(path => fs.readFileSync(path, "utf8"));
    }
    mergeTypesFromPaths(pathsToTypes) {
        const types = pathsToTypes.map(pattern => this.loadTypesFromFiles(pattern));
        return merge_graphql_schemas_1.mergeTypes(types.map(item => {
            return Array.isArray(item) ? item.join("\n") : item;
        }));
    }
};
GraphqlFactory = __decorate([
    common_1.Injectable()
], GraphqlFactory);
exports.GraphqlFactory = GraphqlFactory;

//# sourceMappingURL=graphql.factory.js.map
