import { Connection, Repository } from 'typeorm';
import { User } from "../entities/user.entity";

export const repositoryProvider = [
    {
        provide: 'UserRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DbConnectionToken'],
    },
];
