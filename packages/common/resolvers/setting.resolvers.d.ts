import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";
export declare class SettingResolvers {
    private readonly service;
    constructor(service: SettingService);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(object: any, args: {
        key: string;
    }): Promise<Setting | undefined>;
    removeSetting(obj: any, args: {
        key: string;
    }): Promise<Boolean>;
    setSetting(obj: any, args: {
        key: string;
        value: string;
    }): Promise<Boolean>;
}
