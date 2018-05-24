import { Author } from "../interfaces";

export interface InjectionMetadata {
    authors?: Array<Author>;
    components?: Array<any>;
    controllers?: Array<any>;
    description?: string;
    exports?: Array<any>;
    identification: string;
    imports?: Array<any>;
    modules?: Array<any>;
    name: string;
    version: string;
}
