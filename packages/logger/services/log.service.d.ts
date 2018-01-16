import { Repository } from "typeorm";
import { Log } from "../entities/log.entity";
export declare class LogService {
    private readonly repository;
    constructor(repository: Repository<Log>);
    getLogs(): Promise<Log[]>;
    getLogById(id: Number): Promise<Log | undefined>;
}
