import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
export declare class UserResolver {
    private readonly service;
    constructor(service: UserService);
    deleteUser(obj: any, args: {
        user;
    }): Promise<Boolean>;
    deleteUserByEmail(obj: any, args: {
        email: String;
    }): Promise<Boolean>;
    deleteUserById(obj: any, args: {
        id: Number;
    }): Promise<Boolean>;
    deleteUserByUsername(obj: any, args: {
        username: String;
    }): Promise<Boolean>;
    getUsers(): Promise<User[]>;
    getUserByEmail(obj: any, args: {
        email: String;
    }): Promise<User | undefined>;
    getUserById(obj: any, args: {
        id: Number;
    }): Promise<User | undefined>;
    getUserByUsername(obj: any, args: {
        username: String;
    }): Promise<User | undefined>;
    updateUser(obj: any, args: {
        user;
    }): Promise<Boolean>;
    updateUserByEmail(obj: any, args: {
        email: String;
        user;
    }): Promise<Boolean>;
    updateUserById(obj: any, args: {
        id: Number;
        user;
    }): Promise<Boolean>;
    updateUserByUsername(obj: any, args: {
        username: String;
        user;
    }): Promise<Boolean>;
}
