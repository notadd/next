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
    async deleteUserByEmail(email: String): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .delete()
            .where('email = :email', {
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
            .where('id = :id', {
                id: id,
            })
            .execute();
    }

    /**
     * @param { String } username
     *
     * @returns { Promise<boolean> }
     */
    async deleteUserByUsername(username: String): Promise<boolean> {
        return await this.repository
            .createQueryBuilder()
            .delete()
            .where('username = :username', {
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
     * @param { String } email
     *
     * @returns { Promise<User | undefined> }
     */
    async getUserByEmail(email: String): Promise<User | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where('email = :email', {
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
     * @param { String } username
     *
     * @returns { Promise<User | undefined> }
     */
    async getUserByUsername(username: String): Promise<User | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where('username = :username')
            .setParameter('username', username)
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
     * @param { String } email
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUserByEmail(email: String, obj): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update(obj)
            .where('email = :email', {
                email: email,
            })
            .execute();
    }

    /**
     * @param { Number } id
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUserById(id: Number, obj): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update(obj)
            .where('id = :id')
            .setParameter('id', id)
            .execute();
    }

    /**
     * @param { String } username
     * @param obj
     *
     * @returns { Promise<Boolean> }
     */
    async updateUserByUsername(username: String, obj): Promise<Boolean> {
        return await this.repository
            .createQueryBuilder()
            .update(obj)
            .where('username = :username')
            .setParameter('username', username)
            .execute();
    }
}
