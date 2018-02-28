export declare class InternationalizationService {
    private readonly polyglot;
    constructor();
    setLocale(locale: string): void;
    translate(phrase: string, variables?: any): string;
}
