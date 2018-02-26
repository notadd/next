import * as glob from 'glob';
import * as fs from 'fs';
import { Component } from "@nestjs/common";
import { IExecutableSchemaDefinition, MergeInfo } from "graphql-tools/dist/Interfaces";
import { makeExecutableSchema } from "graphql-tools";
import { mergeTypes } from 'merge-graphql-schemas';
import { ResolversExplorerService } from "@nestjs/graphql/resolvers-explorer.service";

@Component()
export class GraphqlFactory {
    constructor(
        private readonly resolversExplorerService: ResolversExplorerService,
    ) {
    }

    public createSchema(schemaDefinition: IExecutableSchemaDefinition = {
        typeDefs: {
        },
    }) {
        return makeExecutableSchema({
            ...schemaDefinition,
            resolvers: {
                ...this.resolversExplorerService.explore(),
                ...(schemaDefinition.resolvers || {}),
            },
        });
    }

    public createDelegates(): (mergeInfo: MergeInfo) => any {
        return this.resolversExplorerService.exploreDelegates();
    }

    public mergeTypesByPaths(...pathsToTypes: string[]): string {
        return mergeTypes(
            ...pathsToTypes.map(pattern => this.loadFiles(pattern)),
        );
    }

    private loadFiles(pattern: string): any[] {
        const paths = glob.sync(pattern);
        return paths.map(path => fs.readFileSync(path, 'utf8'));
    }
}
