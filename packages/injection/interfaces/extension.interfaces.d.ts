import { Author } from "./";
import { ExtensionShellMetadata } from "../metadatas";
export interface Extension {
    authors?: Array<Author>;
    description?: string;
    enabled: boolean;
    identification: string;
    installed: boolean;
    location: string;
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
}
