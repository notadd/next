import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { commandHandlers } from "../commands/handlers";
import { eventHandlers } from "../events/handlers";
import { Log } from "../entities";
import { LogResolvers } from "../resolvers";
import { LogService } from "../services";
import { MiddlewaresConsumer, Module, OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    components: [
        ...commandHandlers,
        ...eventHandlers,
        LogResolvers,
        LogService,
    ],
    exports: [
        LogService,
    ],
    imports: [
        TypeOrmModule.forFeature([Log]),
        CQRSModule,
    ],
})
export class LoggerModule implements OnModuleInit {
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
