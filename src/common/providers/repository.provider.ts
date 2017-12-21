import { Connection, Repository } from 'typeorm';
import { Log } from "../entities/log.entity";
import { Setting } from "../entities/setting.entity";

export const repositoryProvider = [
    {
        provide: 'LogRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Log),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'SettingRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Setting),
        inject: ['DbConnectionToken'],
    },
];
