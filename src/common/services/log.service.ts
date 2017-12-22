import { Component } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Log } from "../entities/log.entity";

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
    async findAll(): Promise<Log[]> {
        return await this.repository.find();
    }
}
