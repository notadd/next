import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
import { UserUpdateDto } from "../dtos/user.update.dto";
import { UserDeleteDto } from "../dtos/user.delete.dto";
import { UserQueryDto } from "../dtos/user.query.dto";

@Resolver('User')
export class UserResolver {
    constructor(private readonly service: UserService) {
    }

    @Mutation()
    async deleteUser(obj, args: { user: UserDeleteDto }): Promise<Boolean> {
        return await this.service.deleteUser(args.user);
    }

    @Mutation()
    async deleteUserByEmail(obj, args: UserDeleteDto): Promise<Boolean> {
        return await this.service.deleteUserByEmail(args.email);
    }

    @Mutation()
    async deleteUserById(obj, args: UserDeleteDto): Promise<Boolean> {
        return await this.service.deleteUserById(args.id);
    }

    @Mutation()
    async deleteUserByUsername(obj, args: UserDeleteDto): Promise<Boolean> {
        return await this.service.deleteUserByUsername(args.username);
    }

    @Query()
    async getUsers(): Promise<User[]> {
        return await this.service.getUsers()
    }

    @Query()
    async getUserByEmail(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserByEmail(args.email);
    }

    @Query()
    async getUserById(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserById(args.id);
    }

    @Query()
    async getUserByUsername(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserByUsername(args.username);
    }

    @Mutation()
    async updateUser(obj, args: { user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUser(args.user);
    }

    @Mutation()
    async updateUserByEmail(obj, args: { email: String, user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUserByEmail(args.email, args.user);
    }

    @Mutation()
    async updateUserById(obj, args: { id: Number, user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUserById(args.id, args.user);
    }

    @Mutation()
    async updateUserByUsername(obj, args: { username: String, user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUserByUsername(args.username, args.user);
    }
}
