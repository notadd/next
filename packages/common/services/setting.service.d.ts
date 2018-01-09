import { Setting } from "../entities/setting.entity";
import { Repository } from "typeorm";
export declare class SettingService {
    private readonly repository;
    constructor(repository: Repository<Setting>);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(key: String): Promise<Setting | undefined>;
    removeSetting(key: String): Promise<Boolean>;
    setSetting(key: String, value: String): Promise<Boolean>;
}
