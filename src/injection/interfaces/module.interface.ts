import { Injection } from "./injection.interface";
import { Author } from "./author.interface";

export interface Module extends Injection {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    name: string;
    version: string;
}
