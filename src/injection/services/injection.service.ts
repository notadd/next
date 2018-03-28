import { Component } from "@nestjs/common";
import { importInjectionsFromDirectories } from "../utilities";
import { Injection } from "../types";

@Component()
export class InjectionService {
    private injections: Array<Injection> = [];

    /**
     * @returns { Array<Injection> }
     */
    public loadInjections() {
        if (this.injections.length === 0) {
            this.injections = importInjectionsFromDirectories([
                "**/*.injection.js",
            ]);
        }

        return this.injections;
    }

    public refreshInjections() {
        this.injections = [];
        this.loadInjections();
    }
}
