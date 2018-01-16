import { CommandBus, EventBus } from "@nestjs/cqrs";
import { ModuleRef } from "@nestjs/core";
import { OnModuleInit } from "@nestjs/common/interfaces/modules";
export declare class SettingModule implements OnModuleInit {
    private readonly moduleRef;
    private readonly command;
    private readonly event;
    constructor(moduleRef: ModuleRef, command: CommandBus, event: EventBus);
    onModuleInit(): void;
}
