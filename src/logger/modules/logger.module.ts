import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { CommandHandlers } from "../commands/handlers";
import { EventHandlers } from "../events/handlers";
import { Log } from "../entities";
import { LogResolvers } from "../resolvers";
import { LogService } from "../services";
import { MiddlewaresConsumer, Module, OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    components: [
        ...CommandHandlers,
        ...EventHandlers,
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

    configure(consumer: MiddlewaresConsumer) {
    }

    onModuleInit() {
        this.command.setModuleRef(this.moduleRef);
        this.command.register(CommandHandlers);
        this.event.setModuleRef(this.moduleRef);
        this.event.register(EventHandlers);
    }
}
