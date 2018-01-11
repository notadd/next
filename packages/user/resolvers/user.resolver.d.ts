import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
import { UserCreateDto } from "../dtos/user.create.dto";
import { UserUpdateDto } from "../dtos/user.update.dto";
import { UserDeleteDto } from "../dtos/user.delete.dto";
import { UserQueryDto } from "../dtos/user.query.dto";
export declare class UserResolver {
    private readonly service;
    constructor(service: UserService);
    createUser(obj: any, args: {
        user: UserCreateDto;
    }): Promise<User>;
    deleteUser(obj: any, args: {
        user: UserDeleteDto;
    }): Promise<Boolean>;
    deleteUserByEmail(obj: any, args: UserDeleteDto): Promise<Boolean>;
    deleteUserById(obj: any, args: UserDeleteDto): Promise<Boolean>;
    deleteUserByUsername(obj: any, args: UserDeleteDto): Promise<Boolean>;
    getUsers(): Promise<User[]>;
    getUserByEmail(obj: any, args: UserQueryDto): Promise<User | undefined>;
    getUserById(obj: any, args: UserQueryDto): Promise<User | undefined>;
    getUserByUsername(obj: any, args: UserQueryDto): Promise<User | undefined>;
    updateUser(obj: any, args: {
        user: UserUpdateDto;
    }): Promise<Boolean>;
    updateUserByEmail(obj: any, args: {
        email: string;
        user: UserUpdateDto;
    }): Promise<Boolean>;
    updateUserById(obj: any, args: {
        id: number;
        user: UserUpdateDto;
    }): Promise<Boolean>;
    updateUserByUsername(obj: any, args: {
        username: string;
        user: UserUpdateDto;
    }): Promise<Boolean>;
}
