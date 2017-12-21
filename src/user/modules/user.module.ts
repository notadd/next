import { Logger, Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Module({
    components: [
        UserService,
    ],
    controllers: [
        UserController,
    ],
    modules: [
        TypeOrmModule.forRoot([
            User,
        ]),
    ],
})
export class UserModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }
}
