import { OnModuleInit } from "@nestjs/common";
import { UserService } from "@notadd/user/services/user.service";
export declare class InjectionModule implements OnModuleInit {
    private readonly userService;
    private logger;
    constructor(userService: UserService);
    onModuleInit(): Promise<void>;
}
