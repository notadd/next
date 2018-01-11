import { Setting } from "../entities/setting.entity";
import { Repository } from "typeorm";
export declare class SettingService {
    private readonly repository;
    constructor(repository: Repository<Setting>);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(key: string): Promise<Setting | undefined>;
    removeSetting(key: string): Promise<Boolean>;
    setSetting(key: string, value: string): Promise<Boolean>;
}
