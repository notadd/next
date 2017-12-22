import { Component, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Component()
export class UserService {
    /**
     * @param { Repository<User> } repository
     */
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
    ) {
    }

    /**
     * @returns { Promise<User[]> }
     */
    async findAll(): Promise<User[]> {
        return await this.repository.find();
    }
}
