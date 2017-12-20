import { Logger, Module } from '@nestjs/common';
import { BackendController } from './backend.controller';
import { OnModuleInit } from "@nestjs/common/interfaces/modules";

@Module({
    controllers: [
        BackendController,
    ],
})
export class BackendModule implements OnModuleInit {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }

    onModuleInit(): any {
    }
}
