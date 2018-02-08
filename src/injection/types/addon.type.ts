import { Author } from "./author.type";

export type Addon = {
    authors?: Array<Author>;
    identification: string;
    location: string;
};
