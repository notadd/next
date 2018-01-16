import { Log } from "../entities/log.entity";
import { LogResolvers } from "../resolvers/log.resolvers";
import { LogService } from "../services/log.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

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
