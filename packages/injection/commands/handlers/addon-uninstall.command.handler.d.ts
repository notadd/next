import { AddonUninstallCommand } from "../";
import { ICommandHandler } from "@nestjs/cqrs";
export declare class AddonUninstallCommandHandler implements ICommandHandler<AddonUninstallCommand> {
    execute(command: AddonUninstallCommand, resolve: (value?) => void): any;
}
