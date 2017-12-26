import { createConnection, Connection } from 'typeorm';
import { readFileSync } from "fs";
import { load } from "js-yaml";

const ormConfigFilePath = process.cwd() + '/ormconfig.yml';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => createConnection(load(readFileSync(ormConfigFilePath).toString()).default),
    },
];
