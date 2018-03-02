import { AddonEnableCommand } from "../";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(AddonEnableCommand)
export class AddonEnableCommandHandler implements ICommandHandler<AddonEnableCommand> {
    execute(command: AddonEnableCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
