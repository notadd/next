import { AuthResolvers } from "../resolvers/auth.resolvers";
import { AuthService } from "../services/auth.service";
import { forwardRef, MiddlewaresConsumer, Module } from "@nestjs/common";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { UserModule } from "@notadd/user";

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
    configure(consumer: MiddlewaresConsumer) {
    }
}
