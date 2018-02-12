import { ResolversExplorerService } from "@nestjs/graphql/resolvers-explorer.service";
import { IExecutableSchemaDefinition, MergeInfo } from "graphql-tools/dist/Interfaces";
export declare class GraphqlFactory {
    private readonly resolversExplorerService;
    constructor(resolversExplorerService: ResolversExplorerService);
    createSchema(schemaDefinition?: IExecutableSchemaDefinition): any;
    createDelegates(): (mergeInfo: MergeInfo) => any;
    mergeTypesByPaths(...pathsToTypes: string[]): string;
    private loadFiles(pattern);
}
