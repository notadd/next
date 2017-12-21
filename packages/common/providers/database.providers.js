"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => typeorm_1.createConnection({
            type: 'postgres',
            host: '192.168.109.120',
            port: 5432,
            username: 'postgres',
            password: '123qwe',
            database: 'new',
            entities: [
                process.cwd() + '/**/*.entity.js',
            ],
        }),
    },
];
