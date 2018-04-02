import { Author } from "./";
import { ExtensionShellMetadata } from "../metadatas";
import { Injection } from "./injection.interface";

export interface Extension extends Injection {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean,
    identification: string;
    installed: boolean,
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
}
