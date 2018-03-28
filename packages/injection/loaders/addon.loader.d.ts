import { Addon as AddonInterface } from "../interfaces";
export declare class AddonLoader {
    protected addons: Array<AddonInterface>;
    protected filePathForEnabledCache: string;
    constructor();
    load(): void;
}
export declare const Addon: AddonLoader;
