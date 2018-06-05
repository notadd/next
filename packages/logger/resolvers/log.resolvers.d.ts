import { Log } from "../entities";
import { LogService } from "../services";
export declare class LogResolvers {
    private readonly service;
    constructor(service: LogService);
    getLogs(): Promise<Array<Log>>;
    getLogById(obj: any, { id }: {
        id: any;
    }): Promise<Log | undefined>;
}
