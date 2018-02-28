export declare class InternationalizationService {
    private readonly polyglot;
    constructor();
    getPhrases(): any;
    setLocale(locale: string): void;
    translate(phrase: string, variables?: any): string;
}
