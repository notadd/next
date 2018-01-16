import { forwardRef, Module } from "@nestjs/common";
import { AuthResolvers } from "../resolvers/auth.resolvers";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { UserModule } from "@notadd/user";
import { AuthService } from "../services/auth.service";

@Module({
    components: [
        AuthResolvers,
        AuthService,
        JwtStrategy,
    ],
    imports: [
        forwardRef(() => UserModule),
    ],
})
export class AuthenticationModule {
}
