import { Logger, MiddlewaresConsumer, Module } from "@nestjs/common";
import { importClassesFromDirectories } from "../utilities/import.classes.from.directories";

@Module({
    imports: [
        ...importClassesFromDirectories(["**/*.extension.injection.js"]),
    ],
})
export class ExtensionModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger("NotaddExtension", true);
    }

    configure(consumer: MiddlewaresConsumer) {
        this.logger.log('Begin to load extension.');
    }
}
