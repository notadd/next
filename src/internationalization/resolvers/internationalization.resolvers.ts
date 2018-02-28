import { Query, Resolver } from "@nestjs/graphql";
import { InternationalizationService } from "../services";

@Resolver()
export class InternationalizationResolvers {
    /**
     * @param { InternationalizationService } internationalizationService
     */
    constructor(private readonly internationalizationService: InternationalizationService) {
    }

    @Query()
    public getPhrases(): any {
        return this.internationalizationService.getPhrases;
    }

    /**
     * @param context
     * @param args
     * @returns {string}
     */
    @Query()
    public translate(context, args: { phrase: string, variables: any }): string {
        return this.internationalizationService.translate(args.phrase, args.variables);
    }
}
