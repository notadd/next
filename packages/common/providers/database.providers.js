"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'notadd',
            autoSchemaSync: true,
        }),
    },
];
