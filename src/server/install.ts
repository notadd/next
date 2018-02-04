import * as clc from "cli-color";
import { execSync } from 'child_process';
import { prompt } from "inquirer";

async function install() {
    console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

    `);
    console.log(clc.blue("Begin installation"));
    const result = await prompt({
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
}

function addPackageForDatabase(engine: string) {

    console.log(clc.blue(`Install package for database engine ${engine}...`));

    execSync(`yarn add ${engine} -W`, {
        cwd: process.cwd(),
        env: process.env,
        stdio: ["ignore", process.stdout, process.stderr],
    });

    console.log(clc.blue(`Installed package ${engine}`));
}

install();
