import { Author } from "./author.interface";
import { Injection } from "./injection.interface";

export interface Addon extends Injection {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    name: string;
    version: string;
}
