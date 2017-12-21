import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
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
