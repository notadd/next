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
    async getUsers(): Promise<User[]> {
        return await this.repository.find();
    }

    /**
     * @param {Number} id
     *
     * @returns { Promise<User | undefined> }
     */
    async findUserByid(id: Number): Promise<User | undefined> {
        return await this.repository.findOneById(id);
    }

    async findUserByUsername(username: String): Promise<User | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where('username = :username')
            .setParameter('username', username)
            .getOne();
    }
}
