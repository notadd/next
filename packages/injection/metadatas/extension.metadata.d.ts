import { ExtensionShellMetadata } from "./index";
import { Author } from "../interfaces";
export interface ExtensionMetadata {
    authors?: Array<Author>;
    description?: string;
    exports?: Array<any>;
    identification: string;
    imports?: Array<any>;
    components?: Array<any>;
    controllers?: Array<any>;
    modules?: Array<any>;
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
}
