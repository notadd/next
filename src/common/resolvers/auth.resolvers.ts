import { Query, Resolver } from "@nestjs/graphql";

@Resolver('Auth')
export class AuthResolvers {
    @Query()
    async getAuthToken(obj, args): Promise<any> {

    }
}
