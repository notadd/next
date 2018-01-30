import { Repository } from "typeorm";
import { Setting } from "../entities/setting.entity";
export declare class SettingService {
    private readonly repository;
    constructor(repository: Repository<Setting>);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(key: string): Promise<Setting | undefined>;
    removeSetting(key: string): Promise<Setting | undefined>;
    setSetting(key: string, value: string): Promise<Setting>;
}
