import { Author } from "./author.type";

export type Extension = {
    authors?: Array<Author>;
    identification: string;
    location: string;
    version: string;
};
