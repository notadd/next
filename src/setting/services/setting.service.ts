import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Setting } from "../entities/setting.entity";

@Component()
export class SettingService {
    private isInitialized: boolean = false;
    private settings: Setting[] = [];

    /**
     * @param { Repository<Setting> } repository
     */
    constructor(
        @InjectRepository(Setting)
        private readonly repository: Repository<Setting>,
    ) {
    }

    /**
     * @returns { Promise<Setting[]> }
     */
    public async getSettings(): Promise<Setting[]> {
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
            return setting.key == key;
        });
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Setting | undefined> }
     */
    public async removeSetting(key: string): Promise<Setting | undefined> {
        let setting: Setting | undefined = await this.getSettingByKey(key);
        if (typeof setting == "undefined") {
            throw new Error(`Setting dot not exists with key ${key}`);
        } else {
            this.repository.delete({
                key: setting.key,
            });
            this.initialize();
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
        if (typeof setting == "undefined") {
            setting = await this.repository.create({
                key: key,
                value: value,
            });
        } else {
            setting.value = value;
        }
        this.repository.save(setting);
        this.initialize();

        return setting;
    }

    private async initialize(): Promise<void> {
        this.settings = await this.repository.find();
        this.isInitialized = true;
    }
}
