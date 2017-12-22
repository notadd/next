import { Component, Inject } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Component()
export class UserService {
    /**
     * @param { Repository<User> } repository
     */
    constructor(
        @Inject('UserRepositoryToken')
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
