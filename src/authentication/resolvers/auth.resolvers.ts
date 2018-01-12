import { Query, Resolver } from "@nestjs/graphql";
import { AuthService } from "../services/auth.service";
import { AuthDto } from "../dtos/auth.dto";

@Resolver('Auth')
export class AuthResolvers {
    constructor(private readonly service: AuthService) {
    }

    @Query()
    async getAuthToken(obj, args: { auth: AuthDto }): Promise<any> {
        return this.service.createToken(args.auth.username, args.auth.password);
    }
}
