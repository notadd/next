import { Connection, createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<Connection> => createConnection({
            type: 'postgres',
            host: '192.168.109.120',
            port: 5432,
            username: 'postgres',
            password: '22222',
            database: 'new',
        }),
    },
];
