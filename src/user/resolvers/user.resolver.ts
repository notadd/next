import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
import { UserCreateDto } from "../dtos/user.create.dto";
import { UserUpdateDto } from "../dtos/user.update.dto";
import { UserDeleteDto } from "../dtos/user.delete.dto";
import { UserQueryDto } from "../dtos/user.query.dto";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication";

@Resolver('User')
export class UserResolver {
    constructor(private readonly service: UserService) {
    }

    @Mutation()
    @UseGuards(UserGuard)
    async createUser(obj, args: { user: UserCreateDto }): Promise<User> {
        return await this.service.createUser(args.user);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUser(obj, args: { user: UserDeleteDto }): Promise<Boolean> {
        return await this.service.deleteUser(args.user);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUserByEmail(obj, args: UserDeleteDto): Promise<Boolean> {
        return await this.service.deleteUserByEmail(args.email);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUserById(obj, args: UserDeleteDto): Promise<Boolean> {
        return await this.service.deleteUserById(args.id);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUserByUsername(obj, args: UserDeleteDto): Promise<Boolean> {
        return await this.service.deleteUserByUsername(args.username);
    }

    @Query()
    @UseGuards(UserGuard)
    async getUsers(): Promise<User[]> {
        return await this.service.getUsers()
    }

    @Query()
    async getUserByEmail(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserByEmail(args.email);
    }

    @Query()
    @UseGuards(UserGuard)
    async getUserById(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserById(args.id);
    }

    @Query()
    async getUserByUsername(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserByUsername(args.username);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async updateUser(obj, args: { user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUser(args.user);
    }

    @Mutation()
    async updateUserByEmail(obj, args: { email: string, user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUserByEmail(args.email, args.user);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async updateUserById(obj, args: { id: number, user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUserById(args.id, args.user);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async updateUserByUsername(obj, args: { username: string, user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUserByUsername(args.username, args.user);
    }
}
