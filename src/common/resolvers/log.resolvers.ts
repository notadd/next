import { Query, Resolver } from "@nestjs/graphql";
import { Log } from "../entities/log.entity";
import { LogService } from "../services/log.service";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

@Resolver('Log')
export class LogResolvers {
    constructor(private readonly service: LogService) {
    }

    @Query()
    @UseGuards(UserGuard)
    async getLogs(): Promise<Log[]> {
        return await this.service.getLogs();
    }

    @Query()
    @UseGuards(UserGuard)
    async getLogById(obj, { id }): Promise<Log | undefined> {
        return await this.service.getLogById(id);
    }
}
