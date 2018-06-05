import { GraphQLFactory } from "@nestjs/graphql";
export declare class GraphqlFactory extends GraphQLFactory {
    private loadTypesFromFiles;
    mergeTypesFromPaths(pathsToTypes: Array<string>): string;
}
