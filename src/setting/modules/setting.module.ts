import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { commandHandlers } from "../commands/handlers";
import { eventHandlers } from "../events/handlers";
import { MiddlewaresConsumer, Module, OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Setting } from "../entities";
import { SettingResolvers } from "../resolvers";
import { SettingService } from "../services";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    components: [
        ...commandHandlers,
        ...eventHandlers,
        SettingResolvers,
        SettingService,
    ],
    exports: [
        SettingService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            Setting,
        ]),
        CQRSModule,
    ]
})
export class SettingModule implements OnModuleInit {
    constructor(
        private readonly moduleRef: ModuleRef,
        private readonly command: CommandBus,
        private readonly event: EventBus,
    ) {
    }

    onModuleInit() {
        this.command.setModuleRef(this.moduleRef);
        this.command.register(commandHandlers);
        this.event.setModuleRef(this.moduleRef);
        this.event.register(eventHandlers);
    }
}
