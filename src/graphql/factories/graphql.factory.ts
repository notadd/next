import * as fs from "fs";
import * as glob from "glob";
import { Injectable } from "@nestjs/common";
import { mergeTypes } from "merge-graphql-schemas";
import { GraphQLFactory } from "@nestjs/graphql";

@Injectable()
export class GraphqlFactory extends GraphQLFactory {
    private loadTypesFromFiles(pattern: string): Array<any> {
        const paths = glob.sync(pattern);

        return paths.map(path => fs.readFileSync(path, "utf8"));
    }

    public mergeTypesFromPaths(pathsToTypes: Array<string>): string {
        const types = pathsToTypes.map(pattern => this.loadTypesFromFiles(pattern));

        return mergeTypes(types.map(item => {
            return Array.isArray(item) ? item.join("\n") : item;
        }));
    }
}
