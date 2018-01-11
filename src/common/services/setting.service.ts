import { Component, Inject } from "@nestjs/common";
import { Setting } from "../entities/setting.entity";
import { Repository } from "typeorm";

@Component()
export class SettingService {
    /**
     * @param { Repository<Setting> } repository
     */
    constructor(@Inject('SettingRepositoryToken')
                private readonly repository: Repository<Setting>,) {
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
            .where('key = :key', {
                key: key,
            })
            .getOne();
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Boolean> }
     */
    async removeSetting(key: string): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .delete()
            .where('key = :key')
            .setParameter('key', key)
            .execute();
    }

    /**
     * @param { String } key
     * @param { String } value
     *
     * @returns { Promise<Boolean> }
     */
    async setSetting(key: string, value: string): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update()
            .set({
                key: key,
                value: value,
            })
            .where('key = :key')
            .setParameter('key', key)
            .execute();
    }
}
