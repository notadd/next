import { AuthService } from "../services/auth.service";
import { AuthDto } from "../dtos/auth.dto";
import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "../guards/user.guard";

@Resolver('Auth')
export class AuthResolvers {
    constructor(private readonly service: AuthService) {
    }

    @Query()
    @UseGuards(UserGuard)
    async getAuthToken(obj, args: { auth: AuthDto }): Promise<any> {
        return this.service.createToken(args.auth.username, args.auth.password);
    }
}
