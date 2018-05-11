import { Log } from "../entities";
import { LogResolvers } from "../resolvers";
import { LogService } from "../services";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    exports: [
        LogService,
    ],
    imports: [
        TypeOrmModule.forFeature([
            Log,
        ]),
    ],
    providers: [
        LogResolvers,
        LogService,
    ],
})
export class LoggerModule {
}
