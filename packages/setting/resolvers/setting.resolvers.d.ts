import { Setting } from "../entities";
import { SettingService } from "../services";
import { Result } from "../../core/types";
export declare class SettingResolvers {
    private readonly service;
    constructor(service: SettingService);
    getSettings(): Promise<Array<Setting>>;
    getSettingByKey(object: any, args: {
        key: string;
    }): Promise<Setting | undefined>;
    removeSetting(obj: any, args: {
        key: string;
    }): Promise<Result | undefined>;
    setSetting(obj: any, args: {
        key: string;
        value: string;
    }): Promise<Result>;
}
