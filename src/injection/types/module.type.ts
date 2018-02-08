import { Author } from "./author.type";

export type Module = {
    authors?: Array<Author>;
    identification: string;
    location: string;
};
