import { ApplicationController } from './application.controller';
import { BackendModule } from '@notadd/backend';
import { Module } from '@nestjs/common';
import { UserModule } from '@notadd/user';

@Module({
    modules: [
        BackendModule,
        UserModule
    ],
    controllers: [
        ApplicationController,
    ],
    components: [],
})
export class ApplicationModule {
}
