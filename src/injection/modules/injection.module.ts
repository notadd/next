import { AddonModule } from "./addon.module";
import { ExtensionModule } from "./extension.module";
import { InjectionService } from "../services/injection.service";
import {
    Logger,
    Module,
    OnModuleInit,
} from "@nestjs/common";
import { ModuleModule } from "./module.module";
import { UserModule } from "@notadd/user/modules/user.module";
import { UserService } from "@notadd/user/services/user.service";

@Module({
    components: [
        InjectionService,
    ],
    imports: [
        ExtensionModule,
        ModuleModule,
        AddonModule,
        UserModule,
    ],
})
export class InjectionModule implements OnModuleInit {
    private logger: Logger;

    /**
     * @param { UserService } userService
     */
    constructor(private readonly userService: UserService) {
        this.logger = new Logger("NotaddExtension", true);
    }

    async onModuleInit(): Promise<void> {
        const administration = this.userService.getUserById(1);
        if (!administration) {
            await this.userService.createUser({
                username: "admin",
                email: "admin@notadd.com",
                password: "123qwe",
            });
            this.logger.log("Administration Username: admin");
            this.logger.log("Administration Password: 123qwe");
        } else {
            this.logger.log("Administration exists!");
        }
    }
}
