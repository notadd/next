import "reflect-metadata";
import { Author } from "../interfaces";
import { ExtensionShellMetadata } from "../metadatas";
export declare function Extension(obj: {
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
}): ClassDecorator;
