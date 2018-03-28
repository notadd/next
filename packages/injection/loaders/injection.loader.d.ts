import { Injection as InjectionType } from "../interfaces";
export declare class InjectionLoader {
    protected injections: Array<InjectionType>;
    protected pattern: string[];
    constructor();
    load(): Array<InjectionType>;
    refresh(): void;
}
export declare const Injection: InjectionLoader;
