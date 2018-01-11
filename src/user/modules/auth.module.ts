import {
    Module,
    MiddlewaresConsumer,
} from '@nestjs/common';
import { AuthService } from "../services/auth.service";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { AuthResolvers } from "../resolvers/auth.resolvers";
import { UserService } from "../services/user.service";
import { repositoryProvider } from "../providers/repository.provider";
import { DatabaseModule } from "@notadd/common/modules/database.module";

@Module({
    components: [
        ...repositoryProvider,
        AuthResolvers,
        AuthService,
        JwtStrategy,
        UserService,
    ],
    imports: [
        DatabaseModule,
    ],
})
export class AuthModule {
}
