import { ICommandHandler } from "@nestjs/cqrs";
import { AddonUninstallCommand } from "../";
export declare class AddonUninstallCommandHandler implements ICommandHandler<AddonUninstallCommand> {
    execute(command: AddonUninstallCommand, resolve: (value?) => void): any;
}
