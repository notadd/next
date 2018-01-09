import { Connection, Repository } from "typeorm";
import { Setting } from "../entities/setting.entity";
export declare const settingRepositoryProvider: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Setting>;
    inject: string[];
}[];
