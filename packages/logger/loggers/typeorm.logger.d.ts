import { FileLogger } from "typeorm/logger/FileLogger";
export declare class TypeormLogger extends FileLogger {
    protected write(strings: string | string[]): void;
}
