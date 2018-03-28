import { importInjectionsFromDirectories } from "../utilities";
import { Injection as InjectionType } from "../interfaces";

export class InjectionLoader {
    protected injections: Array<InjectionType>;

    protected pattern = [
        "**/*.injection.js",
    ];

    public constructor() {
        this.injections = importInjectionsFromDirectories(this.pattern);
    }

    public load(): Array<InjectionType> {
        return this.injections;
    }

    public refresh() {
        this.injections = importInjectionsFromDirectories(this.pattern);
    }
}

export const Injection = new InjectionLoader();
