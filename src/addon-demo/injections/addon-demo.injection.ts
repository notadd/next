import { Addon } from "@notadd/injection/decorators/addon.decorator";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
import { Logger } from "@nestjs/common";

@Addon({
    authors: [
        {
            email: "admin@notadd.com",
            username: "notadd",
        },
    ],
    identification: "addon-demo",
    name: "Addon Demo",
    version: "v1.0.0",
})
export class AddonDemoInjection implements OnModuleInit {
    private readonly logger = new Logger("AddonLoader");

    public onModuleInit() {
        this.logger.log("Addon demo initialized");
    }
}
