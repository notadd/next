import { IExecutableSchemaDefinition, MergeInfo } from "graphql-tools/dist/Interfaces";
import { ResolversExplorerService } from "@nestjs/graphql/resolvers-explorer.service";
export declare class GraphqlFactory {
    private readonly resolversExplorerService;
    constructor(resolversExplorerService: ResolversExplorerService);
    createSchema(schemaDefinition?: IExecutableSchemaDefinition): any;
    createDelegates(): (mergeInfo: MergeInfo) => any;
    mergeTypesByPaths(...pathsToTypes: Array<string>): string;
    private loadFiles(pattern);
}
