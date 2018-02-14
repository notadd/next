import { Author } from "./author.type";
export declare type Module = {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    location: string;
    name: string;
    version: string;
};
