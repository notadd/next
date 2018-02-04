import { AuthResolvers } from "../resolvers";
import { AuthService } from "../services";
import { forwardRef, MiddlewaresConsumer, Module } from "@nestjs/common";
import { JwtStrategy } from "../strategies";
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
