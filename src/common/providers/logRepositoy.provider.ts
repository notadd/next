import { Connection, Repository } from "typeorm";
import { Log } from "../entities/log.entity";

export const logRepositoryProvider = [
    {
        provide: 'LogRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Log),
        inject: ['DbConnectionToken'],
    },
];
