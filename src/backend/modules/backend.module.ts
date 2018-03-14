import { Logger, MiddlewaresConsumer, Module, RequestMethod } from "@nestjs/common";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { webpackExpress } from "@notadd/core/servers/webpack.server";

@Module({
})
export class BackendModule implements OnModuleInit {
    private logger: Logger;

    constructor() {
        this.logger = new Logger("NotaddApplication", true);
    }

    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(webpackExpress({})).forRoutes({ path: "/admin", method: RequestMethod.ALL });
    }

    onModuleInit(): any {
    }
}
