import { createConnection, Connection } from 'typeorm';
import { database } from '../../config';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => createConnection(database.default),
    },
];
