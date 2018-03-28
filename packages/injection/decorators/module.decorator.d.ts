import 'reflect-metadata';
import { Author } from "../interfaces";
export declare function Module(obj: {
    authors?: Author[];
    description?: string;
    exports?: any[];
    identification: string;
    imports?: any[];
    components?: any[];
    controllers?: any[];
    modules?: any[];
    name: string;
    version: string;
}): ClassDecorator;
