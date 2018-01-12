import { Module } from "@nestjs/common";
import { AuthResolvers } from "../resolvers/auth.resolvers";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { UserModule } from "@notadd/user";
import { UserService } from "@notadd/user/services/user.service";
import { AuthService } from "../services/auth.service";

@Module({
    components: [
        AuthResolvers,
        AuthService,
        JwtStrategy,
        UserService,
    ],
    exports: [
        AuthService,
    ],
    imports: [
        UserModule
    ],
})
export class AuthenticationModule {
}
