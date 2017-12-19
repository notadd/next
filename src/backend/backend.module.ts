import { Module } from '@nestjs/common';
import { BackendController } from './backend.controller';

@Module({
    controllers: [
        BackendController,
    ],
})
export class BackendModule {
}
