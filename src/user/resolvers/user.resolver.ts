import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

@Resolver('User')
export class UserResolver {
    constructor(private readonly service: UserService) {
    }

    @Mutation()
    async deleteUser(obj, args): Promise<Boolean> {
        return await this.service.deleteUser(args.user);
    }

    @Mutation()
    async deleteUserByEmail(obj, args): Promise<Boolean> {
        return await this.service.deleteUserByEmail(args.email);
    }

    @Mutation()
    async deleteUserById(obj, args): Promise<Boolean> {
        return await this.service.deleteUserById(args.id);
    }

    @Mutation()
    async deleteUserByUsername(obj, args): Promise<Boolean> {
        return await this.service.deleteUserByUsername(args.username);
    }

    @Query()
    async getUsers(): Promise<User[]> {
        return await this.service.getUsers()
    }

    @Query()
    async getUserByEmail(obj, args): Promise<User | undefined> {
        return await this.service.getUserByEmail(args.email);
    }

    @Query()
    async getUserById(obj, args): Promise<User | undefined> {
        return await this.service.getUserById(args.id);
    }

    @Query()
    async getUserByUsername(obj, args): Promise<User | undefined> {
        return await this.service.getUserByUsername(args.username);
    }

    @Mutation()
    async updateUser(obj, args): Promise<User | undefined> {
        return await this.service.updateUser(args.user);
    }

    @Mutation()
    async updateUserByEmail(obj, args): Promise<User | undefined> {
        return await this.service.updateUserByEmail(args.email, args.user);
    }

    @Mutation()
    async updateUserById(obj, args): Promise<User | undefined> {
        return await this.service.updateUserByEmail(args.id, args.user);
    }

    @Mutation()
    async updateUserByUsername(obj, args): Promise<User | undefined> {
        return await this.service.updateUserByUsername(args.username, args.user);
    }
}
