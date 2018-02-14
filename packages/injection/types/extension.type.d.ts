import { Author } from "./author.type";
export declare type Extension = {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    location: string;
    name: string;
    version: string;
};
