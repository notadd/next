import { Repository } from "typeorm";
import { Setting } from "../entities";
export declare class SettingService {
    private readonly repository;
    private isInitialized;
    private settings;
    constructor(repository: Repository<Setting>);
    get<T>(key: string, defaultValue: T): Promise<T>;
    getSettings(): Promise<Array<Setting>>;
    getSettingByKey(key: string): Promise<Setting | undefined>;
    removeSetting(key: string): Promise<Setting | undefined>;
    setSetting(key: string, value: string): Promise<Setting>;
    private initialize();
}
