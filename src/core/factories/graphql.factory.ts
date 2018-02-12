import * as glob from 'glob';
import * as fs from 'fs';
import { Component } from "@nestjs/common";
import { ResolversExplorerService } from "@nestjs/graphql/resolvers-explorer.service";
import { IExecutableSchemaDefinition, MergeInfo } from "graphql-tools/dist/Interfaces";
import { makeExecutableSchema } from "graphql-tools";
import { mergeTypes } from 'merge-graphql-schemas';
import { groupBy, mapValues } from 'lodash';

@Component()
export class GraphqlFactory {
    constructor(
        private readonly resolversExplorerService: ResolversExplorerService,
    ) {}

    createSchema(
        schemaDefinition: IExecutableSchemaDefinition = { typeDefs: {} },
    ) {
        console.log({
            ...this.resolversExplorerService.explore(),
            ...(schemaDefinition.resolvers || {}),
        });

        return makeExecutableSchema({
            ...schemaDefinition,
            resolvers: {
                ...this.resolversExplorerService.explore(),
                ...(schemaDefinition.resolvers || {}),
            },
        });
    }

    createDelegates(): (mergeInfo: MergeInfo) => any {
        return this.resolversExplorerService.exploreDelegates();
    }

    mergeTypesByPaths(...pathsToTypes: string[]): string {
        return mergeTypes(
            ...pathsToTypes.map(pattern => this.loadFiles(pattern)),
        );
    }

    private loadFiles(pattern: string): any[] {
        const paths = glob.sync(pattern);
        return paths.map(path => fs.readFileSync(path, 'utf8'));
    }
}
