import { Log } from "../entities";
import { LogResolvers } from "../resolvers";
import { LogService } from "../services";
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
        TypeOrmModule.forFeature([
            Log,
        ]),
    ],
})
export class LoggerModule {
}
