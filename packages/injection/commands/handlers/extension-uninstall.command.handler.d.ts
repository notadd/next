import { ICommandHandler } from "@nestjs/cqrs";
import { ExtensionUninstallCommand } from "../";
export declare class ExtensionUninstallCommandHandler implements ICommandHandler<ExtensionUninstallCommand> {
    execute(command: ExtensionUninstallCommand, resolve: (value?) => void): any;
}
