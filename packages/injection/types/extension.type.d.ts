import { Author } from "./author.type";
import { ExtensionShellMetadata } from "../metadatas";
export declare type Extension = {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    location: string;
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
};
