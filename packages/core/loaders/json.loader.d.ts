import { Logger } from "@nestjs/common";
export declare class JsonLoader {
    protected logger: Logger;
    load<T>(path: string): T;
}
export declare const Json: JsonLoader;
