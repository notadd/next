import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Setting } from "../entities/setting.entity";

@Component()
export class SettingService {
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
    async getSettings(): Promise<Setting[]> {
        return await this.repository.find();
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Setting | undefined> }
     */
    async getSettingByKey(key: string): Promise<Setting | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where("key = :key", {
                key: key,
            })
            .getOne();
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Setting | undefined> }
     */
    async removeSetting(key: string): Promise<Setting | undefined> {
        let setting: Setting | undefined = await this.getSettingByKey(key);
        if (typeof setting == "undefined") {
            throw new Error(`Setting dot not exists with key ${key}`);
        } else {
            await this.repository.delete({
                key: setting.key,
            });
        }

        return setting;
    }

    /**
     * @param { String } key
     * @param { String } value
     *
     * @returns { Promise<Setting> }
     */
    async setSetting(key: string, value: string): Promise<Setting> {
        let setting: Setting | undefined = await this.getSettingByKey(key);
        if (typeof setting == "undefined") {
            setting = await this.repository.create({
                key: key,
                value: value,
            });
        } else {
            setting.value = value;
        }
        await this.repository.save(setting);

        return setting;
    }
}
