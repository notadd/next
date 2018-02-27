import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AddonEnableCommand } from "../";

@CommandHandler(AddonEnableCommand)
export class AddonEnableCommandHandler implements ICommandHandler<AddonEnableCommand> {
    execute(command: AddonEnableCommand, resolve: (value?) => void): any {
        return undefined;
    }
}
