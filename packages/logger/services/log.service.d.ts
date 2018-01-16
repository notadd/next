import { Log } from "../entities/log.entity";
import { Repository } from "typeorm";
export declare class LogService {
    private readonly repository;
    constructor(repository: Repository<Log>);
    getLogs(): Promise<Log[]>;
    getLogById(id: Number): Promise<Log | undefined>;
}
