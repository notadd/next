import { Author } from "./author.type";

export type Addon = {
    authors?: Array<Author>;
    description?: string;
    identification: string;
    location: string;
    name: string;
    version: string;
};
