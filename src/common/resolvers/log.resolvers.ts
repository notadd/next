import { Query, Resolver } from "@nestjs/graphql";
import { Log } from "../entities/log.entity";
import { LogService } from "../services/log.service";

@Resolver('Log')
export class LogResolvers {
    constructor(private readonly logService: LogService) {}

    @Query()
    async getLogs(): Promise<Log[]> {
        return await this.logService.findAll();
    }
}
