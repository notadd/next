import * as clc from "cli-color";
import { exec } from 'child_process';
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
    await addPackageForDatabase(result.engine);
}

async function addPackageForDatabase(engine: string) {
    console.log(clc.blue(`Install package for database engine ${engine}...`));
    return new Promise<void>((resolve, reject) => {
        const child = exec(`yarn add ${engine} -W`, (error: Error, stdout, stderr) => {
            if (error !== undefined && error !== null) {
                reject(error);
            } else {
                console.log('sdfsfsf');
                resolve({ stdout, stderr });
            }
        });

        const killChild = () => child.kill();
        process.setMaxListeners(20);
        process.on('exit', killChild);
        child.on('exit', () => process.removeListener('exit', killChild));
    });
}

install();
