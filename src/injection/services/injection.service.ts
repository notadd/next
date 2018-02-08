import { Component } from "@nestjs/common";
import { importClassesFromDirectories } from "../utilities/import-classes-from-directories";

@Component()
export class InjectionService {
    private injections: Array<Function> = [];

    public loadInjections() {
        if (this.injections.length === 0) {
            this.injections = importClassesFromDirectories<Function>([
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
