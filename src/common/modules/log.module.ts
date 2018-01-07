import { Module } from "@nestjs/common";
import { logRepositoryProvider } from "../providers/logRepositoy.provider";
import { LogResolvers } from "../resolvers/log.resolvers";
import { LogService } from "../services/log.service";
import { DatabaseModule } from "./database.module";

@Module({
    components: [
        ...logRepositoryProvider,
        LogResolvers,
        LogService,
    ],
    exports: [
        LogService,
    ],
    imports: [
        DatabaseModule,
    ],
})
export class LogModule {}
