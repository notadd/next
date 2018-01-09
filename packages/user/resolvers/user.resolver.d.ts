import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
export declare class UserResolver {
    private readonly service;
    constructor(service: UserService);
    deleteUser(obj: any, args: any): Promise<Boolean>;
    deleteUserByEmail(obj: any, args: any): Promise<Boolean>;
    deleteUserById(obj: any, args: any): Promise<Boolean>;
    deleteUserByUsername(obj: any, args: any): Promise<Boolean>;
    getUsers(): Promise<User[]>;
    getUserByEmail(obj: any, args: any): Promise<User | undefined>;
    getUserById(obj: any, args: any): Promise<User | undefined>;
    getUserByUsername(obj: any, args: any): Promise<User | undefined>;
    updateUser(obj: any, args: any): Promise<Boolean>;
    updateUserByEmail(obj: any, args: any): Promise<Boolean>;
    updateUserById(obj: any, args: any): Promise<Boolean>;
    updateUserByUsername(obj: any, args: any): Promise<Boolean>;
}
