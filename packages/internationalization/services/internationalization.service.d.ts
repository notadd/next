import { PhraseMetadata } from "../metadatas/phrase.metadata";
export declare class InternationalizationService {
    private metadatas;
    private readonly polyglot;
    constructor();
    getPhrases(): any;
    initialize(metadatas: Array<PhraseMetadata>): void;
    setLocale(locale: string): void;
    translate(phrase: string, variables?: any): string;
}
