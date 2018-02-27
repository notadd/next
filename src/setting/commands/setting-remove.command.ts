import { ICommand } from "@nestjs/cqrs";

export class SettingRemoveCommand implements ICommand {
    constructor(
        public readonly key: string,
    ) {
    }
}
