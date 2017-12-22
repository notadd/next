import { Component, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Log } from "../entities/log.entity";

@Component()
export class LogService {
    /**
     * @param { Repository<Log> } repository
     */
    constructor(
        @Inject('LogRepositoryToken')
        private readonly repository: Repository<Log>,
    ) {
    }

    /**
     * @returns { Promise<Log[]> }
     */
    async findAll(): Promise<Log[]> {
        return await this.repository.find();
    }
}
