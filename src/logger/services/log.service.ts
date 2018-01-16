import { Component, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Log } from "../entities/log.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Component()
export class LogService {
    /**
     * @param { Repository<Log> } repository
     */
    constructor(
        @InjectRepository(Log)
        private readonly repository: Repository<Log>,
    ) {
    }

    /**
     * @returns { Promise<Log[]> }
     */
    async getLogs(): Promise<Log[]> {
        return await this.repository.find();
    }

    /**
     * @param { Number } id
     *
     * @returns { Promise<Log> }
     */
    async getLogById(id: Number): Promise<Log | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where('id = :id', {
                id: id,
            })
            .getOne();
    }
}
