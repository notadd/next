import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { UserResolver } from "../resolvers/user.resolver";
import { UserService } from "../services/user.service";

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
