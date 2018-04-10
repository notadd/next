import * as writeJsonToFile from "write-json-file";
import { dirname } from "path";
import { existsSync } from "fs";
import { importInjectionsFromDirectories } from "../utilities";
import { Injection as InjectionInterface } from "../interfaces";
import { Logger } from "@nestjs/common";
import { Json } from "@notadd/core/loaders";

export class InjectionLoader {
    protected cacheForInjections: Array<InjectionInterface> = [];

    protected filePathForCache = "";

    protected logger = new Logger("Injection");

    protected patterns = [
        "**/*.injection.js",
    ];

    public get injections(): Array<InjectionInterface> {
        if (!this.cacheForInjections.length) {
            this.loadInjectionsFromCache();
        }

        return this.cacheForInjections;
    }

    constructor() {
        this.loadInjectionsFromCache();
    }

    public refreshInjections() {
        this.cacheForInjections.splice(0, this.cacheForInjections.length);
    }

    protected hasDiffBetweenArrays(one: Array<any>, two: Array<any>): boolean {
        return one.filter(data => {
            return two.indexOf(data) === -1;
        }).length > 0 || two.filter(data => {
            return one.indexOf(data) === -1;
        }).length > 0;
    }

    protected loadCachesFromJsonFile<T>(path: string): T {
        this.logger.log("Load caches from file: " + path);

        return Json.load<T>(path);
    }

    protected loadInjectionsFromCache() {
        this.cacheForInjections = importInjectionsFromDirectories(this.patterns);
    }

    protected writeCachesToFile(path: string, data: any) {
        if (existsSync(dirname(path))) {
            writeJsonToFile.sync(path, data);
            this.logger.log("Write caches to file: " + path);
        } else {
            this.logger.warn(`Path: \`${path}\` do not exists`);
        }
    }
}

export const injection = new InjectionLoader();
