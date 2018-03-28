import { Author } from "./";

export interface Module {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    location: string;
    name: string;
    version: string;
}
