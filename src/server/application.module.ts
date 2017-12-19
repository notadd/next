import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';

@Module({
    modules: [],
    controllers: [
        ApplicationController,
    ],
    components: [],
})
export class ApplicationModule {
}
