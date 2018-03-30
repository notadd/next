import { appendFileSync } from "fs";
import { FileLogger } from "typeorm/logger/FileLogger";

export class TypeormLogger extends FileLogger {
    /**
     * @param { string | string[] } strings
     */
    protected write(strings: string|string[]) {
        strings = strings instanceof Array ? strings : [strings];
        const date = new Date(Date.now());
        const file = `${process.cwd()}/storages/logs/${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.log`;
        strings = (strings as string[]).map(str => "[" + date.toLocaleString() + "]" + str);
        appendFileSync(file, strings.join("\r\n") + "\r\n");
    }
}
