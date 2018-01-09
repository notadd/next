import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Mutation()
    async deleteUser(obj, args): Promise<Boolean> {
        return await this.userService.deleteUser(args.user);
    }

    @Mutation()
    async deleteUserByEmail(obj, args): Promise<Boolean> {
        return await this.userService.deleteUserByEmail(args.email);
    }

    @Mutation()
    async deleteUserById(obj, args): Promise<Boolean> {
        return await this.userService.deleteUserById(args.id);
    }

    @Mutation()
    async deleteUserByUsername(obj, args): Promise<Boolean> {
        return await this.userService.deleteUserByUsername(args.username);
    }

    @Query()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers()
    }

    @Query()
    async getUserByEmail(obj, args): Promise<User | undefined> {
        return await this.userService.getUserByEmail(args.email);
    }

    @Query()
    async getUserById(obj, args): Promise<User | undefined> {
        return await this.userService.getUserById(args.id);
    }

    @Query()
    async getUserByUsername(obj, args): Promise<User | undefined> {
        return await this.userService.getUserByUsername(args.username);
    }

    @Mutation()
    async updateUser(obj, args): Promise<User | undefined> {
        return await this.userService.updateUser(args.user);
    }

    @Mutation()
    async updateUserByEmail(obj, args): Promise<User | undefined> {
        return await this.userService.updateUserByEmail(args.email, args.user);
    }

    @Mutation()
    async updateUserById(obj, args): Promise<User | undefined> {
        return await this.userService.updateUserByEmail(args.id, args.user);
    }

    @Mutation()
    async updateUserByUsername(obj, args): Promise<User | undefined> {
        return await this.userService.updateUserByUsername(args.username, args.user);
    }
}
