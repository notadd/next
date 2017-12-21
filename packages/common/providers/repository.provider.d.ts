import { Connection, Repository } from 'typeorm';
import { Log } from "../entities/log.entity";
export declare const repositoryProvider: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Log>;
    inject: string[];
}[];
