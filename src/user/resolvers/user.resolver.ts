import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { Result } from "@notadd/core/types";
import { UseGuards } from "@nestjs/common";
import { User } from "../entities";
import { UserCreateDto } from "../dtos";
import { UserDeleteDto } from "../dtos";
import { UserGuard } from "@notadd/authentication";
import { UserQueryDto } from "../dtos";
import { UserService } from "../services";
import { UserUpdateDto } from "../dtos";

@Resolver("User")
export class UserResolver {
    constructor(private readonly service: UserService) {
    }

    @Mutation()
    @UseGuards(UserGuard)
    async createUser(obj, args: { user: UserCreateDto }): Promise<Result> {
        await this.service.createUser(args.user);

        return {
            code: 200,
            message: "Created a User successfully!",
        };
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUser(obj, args: { user: UserDeleteDto }): Promise<Result> {
        await this.service.deleteUser(args.user);

        return {
            code: 200,
            message: "Deleted a User successfully!",
        };
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUserByEmail(obj, args: UserDeleteDto): Promise<Result> {
        await this.service.deleteUserByEmail(args.email);

        return {
            code: 200,
            message: "Deleted a User by email successfully!",
        };
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUserById(obj, args: UserDeleteDto): Promise<Result> {
        await this.service.deleteUserById(args.id);

        return {
            code: 200,
            message: "Deleted a User by id successfully!",
        };
    }

    @Mutation()
    @UseGuards(UserGuard)
    async deleteUserByUsername(obj, args: UserDeleteDto): Promise<Result> {
        await this.service.deleteUserByUsername(args.username);

        return {
            code: 200,
            message: "Deleted a User by username successfully!",
        };
    }

    @Query()
    @UseGuards(UserGuard)
    async getUsers(): Promise<User[]> {
        return await this.service.getUsers()
    }

    @Query()
    @UseGuards(UserGuard)
    async getUserByEmail(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserByEmail(args.email);
    }

    @Query()
    @UseGuards(UserGuard)
    async getUserById(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserById(args.id);
    }

    @Query()
    @UseGuards(UserGuard)
    async getUserByUsername(obj, args: UserQueryDto): Promise<User | undefined> {
        return await this.service.getUserByUsername(args.username);
    }

    @Mutation()
    @UseGuards(UserGuard)
    async updateUser(obj, args: { user: UserUpdateDto }): Promise<Boolean> {
        return await this.service.updateUser(args.user);
    }

    @Mutation()
    @UseGuards(UserGuard)
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
