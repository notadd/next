import { ExtensionShellMetadata } from "../metadatas";
import { Author } from "./author.type";

export type Extension = {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean,
    identification: string;
    installed: boolean,
    location: string;
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
};
