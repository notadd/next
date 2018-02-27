import { ICommandHandler } from "@nestjs/cqrs";
import { ExtensionInstallCommand } from "../";
export declare class ExtensionInstallCommandHandler implements ICommandHandler<ExtensionInstallCommand> {
    execute(command: ExtensionInstallCommand, resolve: (value?) => void): any;
}
