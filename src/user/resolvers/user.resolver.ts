import { Query, Resolver } from "@nestjs/graphql";
import { UserService } from "@notadd/user/services/user.service";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query()
    async getUsers() {
        return await this.userService.findAll()
    }
}
