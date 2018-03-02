import 'reflect-metadata';
import { Author } from "../types";
import { ExtensionShellMetadata } from "../metadatas";
export declare function Extension(obj: {
    authors?: Author[];
    description?: string;
    exports?: any[];
    identification: string;
    imports?: any[];
    components?: any[];
    controllers?: any[];
    modules?: any[];
    name: string;
    shell?: ExtensionShellMetadata;
    version: string;
}): ClassDecorator;
