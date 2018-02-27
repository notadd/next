import { ICommandHandler } from "@nestjs/cqrs";
import { ModuleUninstallCommand } from "../";
export declare class ModuleUninstallCommandHandler implements ICommandHandler<ModuleUninstallCommand> {
    execute(command: ModuleUninstallCommand, resolve: (value?) => void): any;
}
