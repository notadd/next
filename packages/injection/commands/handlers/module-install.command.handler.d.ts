import { ICommandHandler } from "@nestjs/cqrs";
import { ModuleInstallCommand } from "../";
export declare class ModuleInstallCommandHandler implements ICommandHandler<ModuleInstallCommand> {
    execute(command: ModuleInstallCommand, resolve: (value?) => void): any;
}
