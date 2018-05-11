import * as fs from "fs";
import * as glob from "glob";
import { Injectable } from "@nestjs/common";
import { IExecutableSchemaDefinition, MergeInfo } from "graphql-tools/dist/Interfaces";
import { makeExecutableSchema } from "graphql-tools";
import { mergeTypes } from "merge-graphql-schemas";
import { ResolversExplorerService } from "@nestjs/graphql/resolvers-explorer.service";

@Injectable()
export class GraphqlFactory {
    constructor(
        private readonly resolversExplorerService: ResolversExplorerService,
    ) {
    }

    public createSchema(schemaDefinition: IExecutableSchemaDefinition) {
        return makeExecutableSchema({
            ...schemaDefinition,
            resolvers: {
                ...this.resolversExplorerService.explore(),
                ...(
                    schemaDefinition.resolvers || {}
                ),
            },
        });
    }

    public createDelegates(): (mergeInfo: MergeInfo) => any {
        return this.resolversExplorerService.exploreDelegates();
    }

    public mergeTypesByPaths(pathsToTypes: Array<string>): string {
        const types = pathsToTypes.map(pattern => this.loadFiles(pattern));

        return mergeTypes(types.map(item => {
            return Array.isArray(item) ? item.join("\n") : item;
        }));
    }

    private loadFiles(pattern: string): Array<any> {
        const paths = glob.sync(pattern);

        return paths.map(path => fs.readFileSync(path, "utf8"));
    }
}
