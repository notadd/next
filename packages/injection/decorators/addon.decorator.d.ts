import "reflect-metadata";
import { Author } from "../interfaces";
export declare function Addon(obj: {
    authors?: Array<Author>;
    description?: string;
    exports?: Array<any>;
    identification: string;
    imports?: Array<any>;
    components?: Array<any>;
    controllers?: Array<any>;
    modules?: Array<any>;
    name: string;
    version: string;
}): ClassDecorator;
