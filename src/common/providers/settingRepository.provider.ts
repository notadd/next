import { Connection } from "typeorm";
import { Setting } from "../entities/setting.entity";

export const settingRepositoryProvider = [
    {
        provide: 'SettingRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Setting),
        inject: ['DbConnectionToken'],
    },
];
