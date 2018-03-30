"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const FileLogger_1 = require("typeorm/logger/FileLogger");
class TypeormLogger extends FileLogger_1.FileLogger {
    write(strings) {
        strings = strings instanceof Array ? strings : [strings];
        const date = new Date(Date.now());
        const file = `${process.cwd()}/storages/logs/${date.getFullYear()}-${date.getMonth()}-${date.getDay()}.log`;
        strings = strings.map(str => "[" + date.toLocaleString() + "]" + str);
        fs_1.appendFileSync(file, strings.join("\r\n") + "\r\n");
    }
}
exports.TypeormLogger = TypeormLogger;
