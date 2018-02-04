"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const clc = require("cli-color");
const child_process_1 = require("child_process");
const inquirer_1 = require("inquirer");
function install() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

    `);
        console.log(clc.blue("Begin installation"));
        const result = yield inquirer_1.prompt({
            type: "list",
            message: "Please select which database engine you want use:",
            name: "engine",
            choices: [
                {
                    name: "Postgres",
                    value: "postgres",
                },
                {
                    name: "MySQL",
                    value: "mysql",
                },
                {
                    name: "Sqlite",
                    value: "sqlite",
                },
            ],
            default: 0,
        });
        addPackageForDatabase(result.engine);
    });
}
function addPackageForDatabase(engine) {
    console.log(clc.blue(`Install package for database engine ${engine}...`));
    child_process_1.execSync(`yarn add ${engine} -W`, {
        cwd: process.cwd(),
        env: process.env,
        stdio: ["ignore", process.stdout, process.stderr],
    });
    console.log(clc.blue(`Installed package ${engine}`));
}
install();
