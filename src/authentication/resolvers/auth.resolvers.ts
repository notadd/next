import { AuthService } from "../services";
import { AuthDto } from "../dtos";
import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "../guards";

@Resolver("Auth")
export class AuthResolvers {
    constructor(private readonly service: AuthService) {
    }

    @Query()
    @UseGuards(UserGuard)
    async getAuthToken(obj, args: { auth: AuthDto }): Promise<any> {
        return this.service.createToken(args.auth.username, args.auth.password);
    }
}
