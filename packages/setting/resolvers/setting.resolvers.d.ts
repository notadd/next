import { Setting } from "../entities";
import { SettingService } from "../services";
export declare class SettingResolvers {
    private readonly service;
    constructor(service: SettingService);
    getSettings(): Promise<Setting[]>;
    getSettingByKey(object: any, args: {
        key: string;
    }): Promise<Setting | undefined>;
    removeSetting(obj: any, args: {
        key: string;
    }): Promise<Setting | undefined>;
    setSetting(obj: any, args: {
        key: string;
        value: string;
    }): Promise<Setting>;
}
