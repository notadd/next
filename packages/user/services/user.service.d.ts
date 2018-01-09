import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<User>);
    deleteUser(obj: any): Promise<Boolean>;
    deleteUserByEmail(email: String): Promise<Boolean>;
    deleteUserById(id: Number): Promise<Boolean>;
    deleteUserByUsername(username: String): Promise<boolean>;
    getUsers(): Promise<User[]>;
    getUserByEmail(email: String): Promise<User | undefined>;
    getUserById(id: Number): Promise<User | undefined>;
    getUserByUsername(username: String): Promise<User | undefined>;
    updateUser(obj: any): Promise<Boolean>;
    updateUserByEmail(email: String, obj: any): Promise<Boolean>;
    updateUserById(id: Number, obj: any): Promise<Boolean>;
    updateUserByUsername(username: String, obj: any): Promise<Boolean>;
}
