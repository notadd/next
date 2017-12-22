import { Component } from "@nestjs/common";
import { Setting } from "../entities/setting.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

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
    async findAll(): Promise<Setting[]> {
        return await this.repository.find();
    }
}
