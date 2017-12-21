import { Logger, Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

@Module({
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
