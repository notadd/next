import { Module as ModuleInterface } from "../interfaces";
export declare class ModuleLoader {
    protected filePathForEnabledCache: string;
    protected modules: Array<ModuleInterface>;
    constructor();
    load(): Array<ModuleInterface>;
}
export declare const Module: ModuleLoader;
