import { User } from "../entities";
import { UserCreateDto } from "../dtos";
import { UserDeleteDto } from "../dtos";
import { UserQueryDto } from "../dtos";
import { UserService } from "../services";
import { UserUpdateDto } from "../dtos";
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
