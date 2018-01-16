import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UserCreateDto } from "../dtos/user.create.dto";
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<User>);
    createUser(obj: UserCreateDto): Promise<User>;
    deleteUser(obj: any): Promise<Boolean>;
    deleteUserByEmail(email: string): Promise<Boolean>;
    deleteUserById(id: Number): Promise<Boolean>;
    deleteUserByUsername(username: string): Promise<boolean>;
    getUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User | undefined>;
    getUserById(id: Number): Promise<User | undefined>;
    getUserByUsername(username: string): Promise<User | undefined>;
    updateUser(obj: any): Promise<Boolean>;
    updateUserByEmail(email: string, obj: any): Promise<Boolean>;
    updateUserById(id: number, obj: any): Promise<Boolean>;
    updateUserByUsername(username: string, obj: any): Promise<Boolean>;
}
