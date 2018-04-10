import { appendFileSync } from "fs";
import { Configuration } from "@notadd/core/loaders";
import { FileLogger } from "typeorm/logger/FileLogger";

export class TypeormLogger extends FileLogger {
    /**
     * @param { string | string[] } strings
     */
    protected write(strings: string | Array<string>) {
        strings = strings instanceof Array ? strings : [strings];

        const configuration = Configuration.loadApplicationConfiguration();
        const date = new Date(Date.now());
        const file = `${process.cwd()}/storages/logs/${date.toLocaleDateString(configuration.timezone)}.log`;

        strings = (strings as Array<string>).map(str => "[" + date.toLocaleString() + "]" + str);
        appendFileSync(file, strings.join("\r\n") + "\r\n");
    }
}
