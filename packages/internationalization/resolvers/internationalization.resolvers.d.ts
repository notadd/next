import { InternationalizationService } from "../services";
export declare class InternationalizationResolvers {
    private readonly internationalizationService;
    constructor(internationalizationService: InternationalizationService);
    getPhrases(): any;
    translate(context: any, args: {
        phrase: string;
        variables: any;
    }): string;
}
