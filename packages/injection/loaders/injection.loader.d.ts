import { Injection as InjectionInterface } from "../interfaces";
import { Logger } from "@nestjs/common";
export declare class InjectionLoader {
    protected cacheForInjections: Array<InjectionInterface>;
    protected logger: Logger;
    protected patterns: string[];
    readonly injections: Array<InjectionInterface>;
    constructor();
    refreshInjections(): void;
    protected loadCachesFromJsonFile<T>(path: string): T;
    protected loadInjectionsFromCache(): void;
    protected writeCachesToFile(path: string, data: any): void;
}
export declare const Injection: InjectionLoader;
