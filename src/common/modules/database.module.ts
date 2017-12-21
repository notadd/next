import { Module } from "@nestjs/common";
import { databaseProviders } from "../providers/database.providers";

@Module({
    components: [
        ...databaseProviders,
    ],
    exports: [
        ...databaseProviders,
    ],
})
export class DatabaseModule {
}
