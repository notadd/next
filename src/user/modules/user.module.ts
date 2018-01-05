import { Logger, Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from "../services/user.service";
import { DatabaseModule } from "@notadd/common/modules/database.module";
import { repositoryProvider } from "../providers/repository.provider";
import { UserResolver } from "../resolvers/user.resolver";

@Module({
    components: [
        ...repositoryProvider,
        UserResolver,
        UserService,
    ],
    controllers: [
        UserController,
    ],
    modules: [
        DatabaseModule
    ],
})
export class UserModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }
}
