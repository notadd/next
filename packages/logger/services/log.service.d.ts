import { Log } from "../entities";
import { Repository } from "typeorm";
export declare class LogService {
    private readonly repository;
    private static prevTimestamp;
    private static contextEnv;
    private static readonly yellow;
    constructor(repository: Repository<Log>);
    getLogs(): Promise<Array<Log>>;
    getLogById(id: number): Promise<Log | undefined>;
    static log(message: string, context?: string, isTimeDiffEnabled?: boolean): void;
    static error(message: string, trace?: string, context?: string, isTimeDiffEnabled?: boolean): void;
    static warn(message: string, context?: string, isTimeDiffEnabled?: boolean): void;
    private static printMessage(message, color, context?, isTimeDiffEnabled?);
    private static printTimestamp(isTimeDiffEnabled?);
    private static printStackTrace(trace);
}
