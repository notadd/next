import { Component } from "@nestjs/common";
import { createHmac } from "crypto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities";
import { UserCreateDto } from "../dtos";

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
     * @param obj
     *
     * @returns { Promise<User> }
     */
    async createUser(obj: UserCreateDto): Promise<User> {
        const user = await this.repository.create({
            username: obj.username,
            email: obj.email,
            password: createHmac('sha256', obj.password).digest('hex'),
        });

        return await this.repository.save(user);
    }

    /**
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async deleteUser(obj): Promise<Boolean> {
        if (obj.id) {
            return await this.deleteUserById(obj.id);
        } else if (obj.username) {
            return await this.deleteUserByUsername(obj.username);
        } else if (obj.email) {
            return await this.deleteUserByEmail(obj.email);
        }

        return false;
    }

    /**
     * @param { String } email
     *
     * @returns { Promise<Boolean> }
     */
    async deleteUserByEmail(email: string): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .delete()
            .where("email = :email", {
                email: email,
            })
            .execute();
    }

    /**
     * @param { Number } id
     *
     * @returns { Promise<Boolean> }
     */
    async deleteUserById(id: Number): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .delete()
            .where("id = :id", {
                id: id,
            })
            .execute();
    }

    /**
     * @param { string } username
     *
     * @returns { Promise<boolean> }
     */
    async deleteUserByUsername(username: string): Promise<boolean> {
        return await this.repository
            .createQueryBuilder()
            .delete()
            .where("username = :username", {
                username: username,
            })
            .execute();
    }

    /**
     * @returns { Promise<User[]> }
     */
    async getUsers(): Promise<User[]> {
        return await this.repository.find();
    }

    /**
     * @param { string } email
     *
     * @returns { Promise<User | undefined> }
     */
    async getUserByEmail(email: string): Promise<User | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where("email = :email", {
                email: email,
            }).getOne();
    }

    /**
     * @param {Number} id
     *
     * @returns { Promise<User | undefined> }
     */
    async getUserById(id: Number): Promise<User | undefined> {
        return await this.repository.findOneById(id);
    }

    /**
     * @param { string } username
     *
     * @returns { Promise<User | undefined> }
     */
    async getUserByUsername(username: string): Promise<User | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where("username = :username")
            .setParameter("username", username)
            .getOne();
    }

    /**
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUser(obj): Promise<Boolean> {
        if (obj.id) {
            await this.updateUserById(obj.id, obj);
        } else if (obj.username) {
            await this.updateUserByUsername(obj.username, obj);
        } else if (obj.email) {
            await this.updateUserByEmail(obj.email, obj);
        }

        return false;
    }

    /**
     * @param { string } email
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUserByEmail(email: string, obj): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update(obj)
            .where("email = :email", {
                email: email,
            })
            .execute();
    }

    /**
     * @param { number } id
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUserById(id: number, obj): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update(obj)
            .where("id = :id")
            .setParameter("id", id)
            .execute();
    }

    /**
     * @param { string } username
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUserByUsername(username: string, obj): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update(obj)
            .where("username = :username")
            .setParameter("username", username)
            .execute();
    }
}
