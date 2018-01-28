import { CommandHandlers } from "../commands/handlers/index";
import { EventHandlers } from "../events/handlers/index";
import { Log } from "../entities/log.entity";
import { LogResolvers } from "../resolvers/log.resolvers";
import { LogService } from "../services/log.service";
import { MiddlewaresConsumer, Module, OnModuleInit } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommandBus, CQRSModule, EventBus } from "@nestjs/cqrs";
import { ModuleRef } from "@nestjs/core";

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
