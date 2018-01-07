import { Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query()
    async getUsers(): Promise<User[]> {
        return await this.userService.findAll()
    }

    @Query()
    async getUserById(obj, args): Promise<User | undefined> {
        return await this.userService.findUserByid(args.id);
    }

    @Query()
    async getUserByUsername(obj, args): Promise<User | undefined> {
        return await this.userService.findUserByUsername(args.username);
    }
}
