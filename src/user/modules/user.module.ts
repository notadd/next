import { Logger, Module } from '@nestjs/common';
import { UserService } from "../services/user.service";
import { UserResolver } from "../resolvers/user.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

@Module({
    components: [
        UserResolver,
        UserService,
    ],
    exports: [
        UserService,
    ],
    imports: [
        TypeOrmModule.forFeature([User])
    ],
})
export class UserModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }
}
