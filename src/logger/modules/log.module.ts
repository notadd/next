import { Module } from "@nestjs/common";
import { LogResolvers } from "../resolvers/log.resolvers";
import { LogService } from "../services/log.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Log } from "../entities/log.entity";

@Module({
    components: [
        LogResolvers,
        LogService,
    ],
    exports: [
        LogService,
    ],
    imports: [
        TypeOrmModule.forFeature([Log]),
    ],
})
export class LogModule {
}
