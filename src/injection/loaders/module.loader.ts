import { Module as ModuleInterface } from "../interfaces";

export class ModuleLoader {
    protected filePathForEnabledCache = `${process.cwd()}/storages/modules/enabled.json`;

    protected modules: Array<ModuleInterface>;

    constructor() {

    }

    public load(): Array<ModuleInterface> {
        return this.modules;
    }
}

export const Module = new ModuleLoader();
