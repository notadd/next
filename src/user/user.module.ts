import { Logger, Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
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
