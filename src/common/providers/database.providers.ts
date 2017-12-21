import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123qwe',
            database: 'new',
        }),
    },
];
