import { Logger, MiddlewaresConsumer, Module } from "@nestjs/common";
import { importClassesFromDirectories } from "../utilities/import.classes.from.directories";

@Module({
    imports: [
        ...importClassesFromDirectories(["**/*.addon.injection.js"]),
    ],
})
export class AddonModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger("NotaddAddon", true);
    }

    configure(consumer: MiddlewaresConsumer) {
        this.logger.log('Begin to load addon.');
    }
}
