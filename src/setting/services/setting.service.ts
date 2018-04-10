import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Setting } from "../entities";

@Component()
export class SettingService {
    private isInitialized = false;

    private settings: Array<Setting> = [];

    /**
     * @param { Repository<Setting> } repository
     */
    constructor(
        @InjectRepository(Setting)
        private readonly repository: Repository<Setting>,
    ) {
    }

    public async get<T>(key: string, defaultValue: T): Promise<T> {
        const setting: Setting | undefined = await this.getSettingByKey(key);
        if (!setting) {
            return defaultValue;
        }
        let result;
        switch (typeof defaultValue) {
            case "boolean":
                result = setting.value === "1";
                break;
            case "string":
                result = setting.value;
                break;
            case "number":
                result = Number(setting.value);
                break;
            default:
                result = setting.value;
                break;
        }

        return result as T;
    }

    /**
     * @returns { Promise<Array<Setting>> }
     */
    public async getSettings(): Promise<Array<Setting>> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        return this.settings;
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Setting | undefined> }
     */
    public async getSettingByKey(key: string): Promise<Setting | undefined> {
        if (!this.isInitialized) {
            await this.initialize();
        }

        return this.settings.find((setting: Setting) => {
            return setting.key === key;
        });
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Setting | undefined> }
     */
    public async removeSetting(key: string): Promise<Setting | undefined> {
        const setting: Setting | undefined = await this.getSettingByKey(key);
        if (typeof setting === "undefined") {
            throw new Error(`Setting dot not exists with key ${key}`);
        } else {
            await this.repository.delete({
                key: setting.key,
            });
            await this.initialize();
        }

        return setting;
    }

    /**
     * @param { String } key
     * @param { String } value
     *
     * @returns { Promise<Setting> }
     */
    public async setSetting(key: string, value: string): Promise<Setting> {
        let setting: Setting | undefined = await this.getSettingByKey(key);
        if (typeof setting === "undefined") {
            setting = await this.repository.create({
                key,
                value,
            });
        } else {
            setting.value = value;
        }
        await this.repository.save(setting);
        await this.initialize();

        return setting;
    }

    private async initialize(): Promise<void> {
        this.settings = await this.repository.find();
        this.isInitialized = true;
    }
}
