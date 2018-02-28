import * as Polyglot from 'node-polyglot';
import { Component } from "@nestjs/common";

@Component()
export class InternationalizationService {
    private readonly polyglot: Polyglot;

    constructor() {
        this.polyglot = new Polyglot();
    }

    public setLocale(locale: string): void {
        if (this.polyglot.locale() !== locale) {
            this.polyglot.locale(locale);
        }
    }

    public translate(phrase: string, variables?: any): string {
        return this.polyglot.t(phrase, variables);
    }
}
