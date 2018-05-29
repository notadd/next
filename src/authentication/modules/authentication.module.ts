import { forwardRef, MiddlewareConsumer, Module } from "@nestjs/common";
import { UserModule } from "@notadd/user";

import { AuthResolvers } from "../resolvers/auth.resolvers";
import { AuthService } from "../services/auth.service";

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
