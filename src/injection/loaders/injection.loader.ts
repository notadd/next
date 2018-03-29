import { importInjectionsFromDirectories } from "../utilities";
import { Injection as InjectionInterface } from "../interfaces";

export class InjectionLoader {
    protected caches: Array<InjectionInterface> = [];

    protected patterns = [
        "**/*.injection.js",
    ];

    public get injections(): Array<InjectionInterface> {
        if (this.caches.length < 1) {
            this.caches = importInjectionsFromDirectories(this.patterns);
        }

        return this.caches;
    }

    public refresh() {
        this.caches.splice(0, this.caches.length);
    }
}

export const Injection = new InjectionLoader();
