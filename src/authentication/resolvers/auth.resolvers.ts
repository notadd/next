import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthDto } from "../dtos";
import { UserGuard } from "../guards";
import { AuthService } from "../services";

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
