import { Logger, Module } from "@nestjs/common";

@Module({
})
export class BackendModule {
    private logger: Logger = new Logger("NotaddApplication", true);
}
