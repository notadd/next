import { Repository } from "typeorm";
import { Setting } from "../entities/setting.entity";
export declare class SettingService {
    private readonly repository;
    private isInitialized;
    private settings;
    constructor(repository: Repository<Setting>);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(key: string): Promise<Setting | undefined>;
    removeSetting(key: string): Promise<Setting | undefined>;
    setSetting(key: string, value: string): Promise<Setting>;
    private initialize();
}
