import { importInjectionsFromDirectories } from "../utilities";
import { Injection as InjectionInterface } from "../interfaces";

export class InjectionLoader {
    protected cacheForInjections: Array<InjectionInterface> = [];

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

    protected loadInjectionsFromCache() {
        this.cacheForInjections = importInjectionsFromDirectories(this.patterns);
    }
}

export const Injection = new InjectionLoader();
