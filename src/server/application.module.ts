import { Module } from '@nestjs/common';
import { BackendModule } from '@notadd/backend';
import { ApplicationController } from './application.controller';

@Module({
    modules: [
        BackendModule,
    ],
    controllers: [
        ApplicationController,
    ],
    components: [],
})
export class ApplicationModule {
}
