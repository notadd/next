import { Log } from "../entities";
import { LogService } from "../services";
import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { UserGuard } from "@notadd/authentication/guards/user.guard";

@Resolver("Log")
export class LogResolvers {
    constructor(private readonly service: LogService) {
    }

    @Query()
    @UseGuards(UserGuard)
    async getLogs(): Promise<Array<Log>> {
        console.log(process.pid);
        process.send && process.send({
            action: "restart",
        });

        return this.service.getLogs();
    }

    @Query()
    @UseGuards(UserGuard)
    async getLogById(obj, { id }): Promise<Log | undefined> {
        return this.service.getLogById(id);
    }
}
