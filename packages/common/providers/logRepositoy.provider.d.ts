import { Connection, Repository } from "typeorm";
import { Log } from "../entities/log.entity";
export declare const logRepositoryProvider: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Log>;
    inject: string[];
}[];
