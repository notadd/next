import { Logger, Module } from '@nestjs/common';
import { UserService } from "../services/user.service";
import { DatabaseModule } from "@notadd/common/modules/database.module";
import { repositoryProvider } from "../providers/repository.provider";
import { UserResolver } from "../resolvers/user.resolver";
import { AuthModule } from "./auth.module";

@Module({
    components: [
        ...repositoryProvider,
        UserResolver,
        UserService,
    ],
    exports: [
        ...repositoryProvider,
        UserService,
    ],
    imports: [
        DatabaseModule,
        AuthModule,
    ],
})
export class UserModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }
}
