import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddonUninstallCommand } from "../";

@CommandHandler(AddonUninstallCommand)
export class AddonUninstallCommandHandler implements ICommandHandler<AddonUninstallCommand> {
    execute(command: AddonUninstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
