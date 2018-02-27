import { ICommandHandler } from "@nestjs/cqrs";
import { ModuleEnableCommand } from "../";
export declare class ModuleEnableCommandHandler implements ICommandHandler<ModuleEnableCommand> {
    execute(command: ModuleEnableCommand, resolve: (value?) => void): any;
}
