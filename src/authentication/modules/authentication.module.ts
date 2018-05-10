import { AuthResolvers } from "../resolvers";
import { AuthService } from "../services";
import { forwardRef, MiddlewareConsumer, Module } from "@nestjs/common";
import { UserModule } from "@notadd/user";

@Module({
    providers: [
        AuthResolvers,
        AuthService,
    ],
    imports: [
        forwardRef(() => UserModule),
    ],
})
export class AuthenticationModule {
    configure(consumer: MiddlewareConsumer) {
    }
}
