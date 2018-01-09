import { Log } from "../entities/log.entity";
import { LogService } from "../services/log.service";
export declare class LogResolvers {
    private readonly service;
    constructor(service: LogService);
    getLogs(): Promise<Log[]>;
    getLogById(obj: any, {id}: {
        id: any;
    }): Promise<Log | undefined>;
}
