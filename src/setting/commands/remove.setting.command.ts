import { ICommand } from "@nestjs/cqrs";

export class RemoveSettingCommand implements ICommand {
    constructor(
        public readonly key: string,
    ) {
    }
}
