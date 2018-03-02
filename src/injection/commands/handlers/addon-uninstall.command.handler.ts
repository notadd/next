import { AddonUninstallCommand } from "../";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(AddonUninstallCommand)
export class AddonUninstallCommandHandler implements ICommandHandler<AddonUninstallCommand> {
    execute(command: AddonUninstallCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
