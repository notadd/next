import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Log } from "../entities";
import { Repository } from "typeorm";

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
            .where("id = :id", {
                id: id,
            })
            .getOne();
    }
}
