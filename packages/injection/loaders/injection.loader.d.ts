import { Injection as InjectionInterface } from "../interfaces";
export declare class InjectionLoader {
    protected caches: Array<InjectionInterface>;
    protected patterns: string[];
    readonly injections: Array<InjectionInterface>;
    refresh(): void;
}
export declare const Injection: InjectionLoader;
