import { createConnection, Connection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => createConnection({
            type: 'postgres',
            host: '192.168.109.120',
            port: 5432,
            username: 'postgres',
            password: '123qwe',
            database: 'new',
            entities: [
                process.cwd() + '/**/*.entity.js',
            ],
            autoSchemaSync: true,
        }),
    },
];
