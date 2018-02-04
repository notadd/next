import { Logger, MiddlewaresConsumer, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities";
import { UserResolver } from "../resolvers";
import { UserService } from "../services";

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
        this.logger = new Logger("NotaddApplication", true);
    }

    configure(consumer: MiddlewaresConsumer) {
    }
}
