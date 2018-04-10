import { CommandBus, EventBus } from "@nestjs/cqrs";
import { OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
export declare class SettingModule implements OnModuleInit {
    private readonly moduleRef;
    private readonly command;
    private readonly event;
    constructor(moduleRef: ModuleRef, command: CommandBus, event: EventBus);
    onModuleInit(): void;
}
