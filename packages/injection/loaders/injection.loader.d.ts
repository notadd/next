import { Injection as InjectionInterface } from "../interfaces";
export declare class InjectionLoader {
    protected cacheForInjections: Array<InjectionInterface>;
    protected patterns: string[];
    readonly injections: Array<InjectionInterface>;
    constructor();
    refreshInjections(): void;
    protected loadInjectionsFromCache(): void;
}
export declare const Injection: InjectionLoader;
