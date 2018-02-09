import { Author } from "./author.type";

export type Extension = {
    authors?: Array<Author>;
    description?: string;
    identification: string;
    location: string;
    name: string;
    version: string;
};
