import { Module } from "@nestjs/common";
import { repositoryProvider } from "../providers/repository.provider";
import { LogResolvers } from "../resolvers/log.resolvers";
import { LogService } from "../services/log.service";
import { DatabaseModule } from "./database.module";

@Module({
    components: [
        ...repositoryProvider,
        LogService,
        LogResolvers,
    ],
    imports: [
        DatabaseModule,
    ],
})
export class LogModule {}
