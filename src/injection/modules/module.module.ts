import { Logger, MiddlewaresConsumer, Module } from "@nestjs/common";
import { importClassesFromDirectories } from "../utilities/import.classes.from.directories";

@Module({
    imports: [
        ...importClassesFromDirectories(["**/*.module.injection.js"]),
    ],
})
export class ModuleModule {
    private logger: Logger;

    constructor() {
        this.logger = new Logger("NotaddModule", true);
    }

    configure(consumer: MiddlewaresConsumer) {
        this.logger.log('Begin to load module.');
    }
}
