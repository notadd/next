import { Logger, Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from "../services/user.service";
import { repositoryProvider } from "../providers/repository.provider";

@Module({
    components: [
        ...repositoryProvider,
        UserService,
    ],
    controllers: [
        UserController,
    ],
})
export class UserModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }
}
