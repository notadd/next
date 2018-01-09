import { Setting } from "../entities/setting.entity";
import { SettingService } from "../services/setting.service";
export declare class SettingResolvers {
    private readonly service;
    constructor(service: SettingService);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(object: any, args: any): Promise<Setting | undefined>;
    removeSetting(obj: any, args: any): Promise<Boolean>;
    setSetting(obj: any, args: any): Promise<Boolean>;
}
