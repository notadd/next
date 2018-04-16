import * as clc from "cli-color";
import * as writeJsonFile from "write-json-file";
import { createConnection } from "typeorm";
import { createHash } from "crypto";
import { join } from "path";
import { execSync } from "child_process";
import { prompt } from "inquirer";
import { User } from "@notadd/user/model/user.entity";

async function install() {
    console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

    `);
    console.log(clc.blue("Please answer the following questions carefully:"));

    let result;
    result = await prompt([
        {
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
        },
    ]);
    const engine = result.engine;
    switch (engine) {
        case "postgres":
        case "mysql":
            result = await prompt([
                {
                    type: "input",
                    message: "Database Host:",
                    name: "databaseHost",
                },
                {
                    type: "input",
                    message: "Database Port:",
                    name: "databasePort",
                },
                {
                    type: "input",
                    message: "Database Username:",
                    name: "databaseUsername",
                },
                {
                    type: "input",
                    message: "Database Password:",
                    name: "databasePassword",
                },
                {
                    type: "input",
                    message: "Database Name:",
                    name: "database",
                },
                {
                    type: "input",
                    message: "Administration Username:",
                    name: "username",
                },
                {
                    type: "input",
                    message: "Administration Email:",
                    name: "email",
                },
                {
                    type: "input",
                    message: "Administration Password:",
                    name: "password",
                },
            ]);
            break;
        default:
            result = await prompt([
                {
                    type: "input",
                    message: "Administration Username:",
                    name: "username",
                },
                {
                    type: "input",
                    message: "Administration Email:",
                    name: "email",
                },
                {
                    type: "input",
                    message: "Administration Password:",
                    name: "password",
                },
            ]);
            break;
    }
    let database = {};
    switch (engine) {
        case "postgres":
        case "mysql":
            database = {
                type: engine,
                host: result.databaseHost,
                port: result.databasePort,
                username: result.databaseUsername,
                password: result.databasePassword,
                database: result.database,
                entities: [
                    "**/*.entity.js",
                ],
                migrations: [
                    "**/*.migration.js",
                ],
                logging: true,
                migrationsRun: false,
                synchronize: false,
            };
            break;
        default:
            database = {
                type: engine,
                database: "./notadd.sqlite",
                entities: [
                    "**/*.entity.js",
                ],
                migrations: [
                    "**/*.migration.js",
                ],
                logging: true,
                migrationsRun: false,
                synchronize: false,
            };
            break;
    }
    writeJsonFile.sync(join(process.cwd(), "configurations", "database.json"), database, {
        indent: 4,
        sortKeys: true,
    });
    let wanted = "";
    switch (engine) {
        case "mysql":
            wanted = "mysql";
            break;
        case "sqlite":
            wanted = "sqlite3";
            break;
        default:
            wanted = "pg";
            break;
    }

    addPackageForDatabase(wanted);
    await addAdministrationUser(result.username, result.email, result.password, database);

    console.log(clc.blue("Notadd install successfully!"));
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

async function addAdministrationUser(username: string, email: string, password: string, database: any) {
    const connection = await createConnection(database);
    await connection.synchronize(false);
    const repository = connection.getRepository(User);
    const salt = createHash("sha256").update(new Date().toString()).digest("hex").slice(0, 10);
    const organizations = [];
    const passwordWithSalt = createHash("sha256").update(password + salt).digest("hex");
    const user = repository.create({
        userName: username,
        password: passwordWithSalt,
        salt,
        status: true,
        recycle: false,
        organizations
    });
    await repository.save(user);
    await connection.close();
}

install();
