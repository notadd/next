import { Addon as AddonInterface } from "../interfaces";

export class AddonLoader {
    protected addons: Array<AddonInterface>;

    protected filePathForEnabledCache = `${process.cwd()}/storages/addons/enabled.json`;

    constructor() {

    }

    public load() {

    }
}

export const Addon = new AddonLoader();
