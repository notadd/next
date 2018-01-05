import { Query, Resolver } from "@nestjs/graphql";
import { UserService } from "@notadd/user/services/user.service";
import { User } from "../entities/user.entity";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query()
    async getUsers(): Promise<User[]> {
        return await this.userService.findAll()
    }
}
