import { Logger } from "@nestjs/common";
import { Injection as InjectionInterface } from "../interfaces/injection.interface";
export declare class InjectionLoader {
    protected cacheForInjections: Array<InjectionInterface>;
    protected filePathForCache: string;
    protected logger: Logger;
    protected patterns: string[];
    readonly injections: Array<InjectionInterface>;
    constructor();
    refreshInjections(): void;
    protected hasDiffBetweenArrays(one: Array<any>, two: Array<any>): boolean;
    protected loadCachesFromJsonFile<T>(path: string): T;
    protected loadInjectionsFromCache(): void;
    protected writeCachesToFile(path: string, data: any): void;
}
export declare const injection: InjectionLoader;
